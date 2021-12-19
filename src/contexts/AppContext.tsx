import { createContext, ReactNode, useContext } from "react";
import type { ActorRefFrom } from "xstate";
import { useInterpret } from "@xstate/react";
import appMachine from "src/machines/appMachine";

interface AppProviderProps {
  children: ReactNode;
}

interface AppStateContextType {
  appService: ActorRefFrom<typeof appMachine>;
}

const AppContext = createContext({} as AppStateContextType);

const AppProvider = ({ children }: AppProviderProps) => {
  const service = useInterpret(appMachine);
  return (
    <AppContext.Provider value={{ appService: service }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (typeof context === "undefined") {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export { useApp, AppProvider };
