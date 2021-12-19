import { assign } from "xstate";
import type { AppContext, AppEvent } from "..";

// Debug
export const log = (ctx: AppContext, evt: AppEvent) =>
  console.log("APP CONTEXT", ctx, evt);

export const setAccessToken = assign<AppContext, AppEvent>({
  auth: ({ auth }, evt) => {
    if (evt.type !== "AUTH_AUTHENTICATED") return auth;
    return {
      ...auth,
      accessToken: evt.accessToken,
    };
  },
});

export const clearAccessToken = assign<AppContext, AppEvent>({
  auth: ({ auth }, evt) => {
    if (evt.type !== "AUTH_UNAUTHENTICATED") return auth;
    return {
      ...auth,
      accessToken: null,
    };
  },
});

export const setAuthErrorCode = assign<AppContext, AppEvent>({
  auth: ({ auth }, evt) => {
    if (evt.type !== "error.platform.auth-login") return auth;
    return {
      ...auth,
      errorCode: evt.data.code,
    };
  },
});

export const clearAuthErrorCode = assign<AppContext, AppEvent>({
  auth: ({ auth }, evt) => {
    if (evt.type !== "AUTH_LOGIN") return auth;
    return {
      ...auth,
      errorCode: null,
    };
  },
});
