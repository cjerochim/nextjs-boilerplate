import type { State } from "xstate";
import { useSelector } from "@xstate/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useApp } from "src/contexts/AppContext";
import { AppContext } from "next/app";
import { AppEvent } from "src/machines/appMachine";
import { NextPageWithLayout } from "pages/_app";

//
const isAuthSelector = (state: State<AppContext, AppEvent, any>): boolean =>
  state.matches({ authentication: { init: "authenticated" } });

interface WithAuthenticatedProps {
  redirect?: string;
}

const withAuthenticated =
  ({ redirect }: WithAuthenticatedProps = { redirect: "/" }) =>
  <T,>(Component: NextPageWithLayout) => {
    // Inject layout if defined.
    const fn = (hocProps: T) => {
      const router = useRouter();
      const { appService } = useApp();
      const isAuthenticated = useSelector(appService, isAuthSelector);

      // Redirect if state changes
      useEffect(() => {
        if (router.isReady && isAuthenticated) {
          router.replace(redirect!);
          return;
        }
      }, [router, isAuthenticated]);

      return <Component {...hocProps} />;
    };

    // Re-map Layout for _app
    fn.Layout = Component.Layout;
    return fn;
  };

export default withAuthenticated;
