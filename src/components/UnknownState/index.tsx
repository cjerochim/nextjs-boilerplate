import { useSelector } from "@xstate/react";
import { ReactNode } from "react";
import { useApp } from "src/contexts/AppContext";
import { AppEvent, AppContext } from "src/machines/appMachine";
import { State } from "xstate";

import { Base, Brand } from "./styles";

// Description
// Manage view when determining if the user is authenticated or not authenticated.

const isUnknownSelector = (state: State<AppContext, AppEvent, any>): boolean =>
  state.matches({ authentication: { init: "unknown" } });

interface UnknownStateProps {
  children: ReactNode;
}

const UnknownState = ({ children }: UnknownStateProps) => {
  const { appService } = useApp();
  const isUnknown = useSelector(appService, isUnknownSelector);

  return (
    <>
      {isUnknown && (
        <Base>
          <Brand />
        </Base>
      )}
      {!isUnknown && <>{children}</>}
    </>
  );
};

export default UnknownState;
