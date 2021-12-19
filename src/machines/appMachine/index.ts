import { createMachine } from "xstate";

import context from "./context";
import * as actions from "./actions";
import * as services from "./services";

// Error code reference https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#error-codes_8
export interface AuthContext {
  accessToken: string | null;
  errorCode:
    | "auth/wrong-password"
    | "auth/user-not-found"
    | "auth/too-many-requests"
    | null;
}

export interface AppContext {
  auth: AuthContext;
}

// TODO - Valdiate how to declare a tag as a type instead
export const AppTag = {
  loading: "loading",
};

export type AppEvent =
  // General & User related events
  | { type: "INIT" }
  | { type: "AUTH_AUTHENTICATED"; accessToken: AuthContext["accessToken"] }
  | { type: "AUTH_UNAUTHENTICATED" }
  | { type: "AUTH_LOGIN"; email: string; password: string }
  | { type: "AUTH_LOGOUT" }
  // Internal service related events
  | {
      type: "error.platform.auth-login";
      data: {
        code: AuthContext["errorCode"];
      };
    };

// TODO - Consider separating Auth into its own machine as the build matures
const appMachine = createMachine<AppContext, AppEvent>(
  {
    id: "App",
    type: "parallel",
    context,
    states: {
      // Handle auth state in background
      authentication: {
        initial: "init",
        states: {
          init: {
            // Parent manages child state to be either auth or unauthenticated
            invoke: {
              id: "firebase-authentication",
              src: "initiateAuthState",
            },
            // Either transition to an auth or unauth state
            on: {
              AUTH_AUTHENTICATED: ".authenticated",
              AUTH_UNAUTHENTICATED: ".unauthenticated",
            },
            initial: "unknown",
            states: {
              unknown: {},
              unauthenticated: {
                entry: ["clearAccessToken"],
                on: { AUTH_LOGIN: ".login" },
                // Nested state to handle the login process
                initial: "idle",
                states: {
                  idle: {},
                  login: {
                    tags: [AppTag.loading],
                    invoke: {
                      id: "auth-login",
                      src: "initiateLogin",
                      onDone: "idle",
                      onError: "loginError",
                    },
                  },
                  loginError: {
                    entry: ["setAuthErrorCode"],
                    exit: ["clearAuthErrorCode"],
                    on: { AUTH_LOGIN: "login" },
                  },
                  // TODO - Handle error
                  serverError: {},
                },
              },
              authenticated: {
                entry: ["setAccessToken"],
                on: { AUTH_LOGOUT: ".logout" },
                // Nested state to handle logout process
                initial: "idle",
                states: {
                  idle: {},
                  logout: {
                    tags: [AppTag.loading],
                    invoke: {
                      id: "auth-logout",
                      src: "initiateLogout",
                      onDone: "idle",
                      onError: "error",
                    },
                  },
                  // TODO - Handle error
                  error: {},
                },
              },
            },
          },
        },
      },
      // Handle app state
      application: {
        initial: "idle",
        states: {
          idle: {},
        },
      },
    },
  },
  {
    actions,
    services,
  }
);

export type AppMachine = typeof appMachine;

export default appMachine;
