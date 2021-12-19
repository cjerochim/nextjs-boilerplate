import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ElementType } from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

import {
  CacheProvider,
  EmotionCache,
  ThemeProvider as EmotionProvider,
} from "@emotion/react";

import { inspect } from "@xstate/inspect";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ThemeProvider } from "@mui/system";

import { AppProvider } from "src/contexts/AppContext";
import theme from "src/theme";
import Global from "src/components/Global";
import LayoutDashboard from "src/components/LayoutDashboard";
import createEmotionCache from "src/utils/createEmotionCache";
import UnknownState from "src/components/UnknownState";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  inspect({ iframe: false });
}

const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout = NextPage & {
  Layout?: ElementType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

// Tranistion
const variants = {
  hidden: { opacity: 0, x: 0 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

function AltaiCasingApp(props: AppPropsWithLayout) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  // Utilise pre-defined layout or use Dashboard
  const Layout = Component.Layout ?? LayoutDashboard;

  return (
    <CacheProvider value={emotionCache}>
      <AppProvider>
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
          <ThemeProvider theme={theme}>
            {/* Note issues with mui styled, utilising emotion directly and leveraging theme values */}
            <EmotionProvider theme={theme}>
              <Global />
              <UnknownState>
                <Layout>
                  <LazyMotion features={domAnimation}>
                    <AnimatePresence
                      exitBeforeEnter
                      initial={false}
                      onExitComplete={() => window.scrollTo(0, 0)}
                    >
                      <motion.main
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        key={router.route}
                        transition={{
                          type: "spring",
                          duration: 0.3,
                        }}
                      >
                        <Component {...pageProps} />
                      </motion.main>
                    </AnimatePresence>
                  </LazyMotion>
                </Layout>
              </UnknownState>
            </EmotionProvider>
          </ThemeProvider>
        </LocalizationProvider>
      </AppProvider>
    </CacheProvider>
  );
}

export default AltaiCasingApp;
