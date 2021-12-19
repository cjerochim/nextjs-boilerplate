import type { State } from "xstate";
import { useSelector } from "@xstate/react";
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useApp } from "src/contexts/AppContext";
import { AppContext } from "next/app";
import { AppEvent } from "src/machines/appMachine";

//
const isAuthSelector = (state: State<AppContext, AppEvent, any>): boolean =>
  state.matches({ authentication: { init: "authenticated" } });

interface WithProtectedProps {
  redirect?: string;
}

const withProtected =
  ({ redirect }: WithProtectedProps = { redirect: "/login" }) =>
  <T,>(Component: ComponentType) => {
    return (hocProps: T) => {
      const router = useRouter();
      const { appService } = useApp();
      const isAuthenticated = useSelector(appService, isAuthSelector);

      useEffect(() => {
        if (router.isReady && !isAuthenticated) {
          router.replace(redirect!);
          return;
        }
      }, [router, isAuthenticated]);

      return <Component {...hocProps} />;
    };
  };

export default withProtected;
