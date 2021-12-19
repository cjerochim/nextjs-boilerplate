import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

import firebase from "src/services/firebase";
import { AppContext, AppEvent } from "..";

//***************************************** */
// Initiate login with firebase
//***************************************** */
export const initiateLogin = async (
  ctx: AppContext,
  evt: AppEvent
): Promise<any> => {
  if (evt.type !== "AUTH_LOGIN") return;
  const app = firebase();
  const auth = getAuth(app);
  // Note - no need to return response, auth state will update app state once authenication is successful
  await signInWithEmailAndPassword(auth, evt.email.trim(), evt.password.trim());
};

//***************************************** */
// Manage user logout
//***************************************** */
export const initiateLogout =
  async (ctx: AppContext, evt: AppEvent) => (callback: any) => {
    if (evt.type !== "AUTH_LOGOUT") return;
    callback({ type: "AUTH_UNAUTHENTICATED" });

    // const app = firebase();
    // const auth = getAuth(app);
    // auth.signOut();
  };

//***************************************** */
// TODO - Research typing callback and receive
// Callback to manage application state
//***************************************** */
export const initiateAuthState =
  (ctx: AppContext, evt: AppEvent) => (callback: any, onReceive: any) => {
    // Show unauth screen
    callback({ type: "AUTH_UNAUTHENTICATED" });

    // auth
    setTimeout(() => {
      callback({ type: "AUTH_AUTHENTICATED", accessToken: "1234" });
    }, 5000);

    // const app = firebase();
    // const auth = getAuth(app);
    // // Retrieve token (Not ideal, shou)
    // const updateAppState = async (user: User): Promise<void> => {
    //   // const accessToken = await user.getIdToken();
    //   callback({ type: "AUTH_AUTHENTICATED", accessToken: "1234" });
    // };
    // // Initiate Listener
    // const unsubscribe = onAuthStateChanged(auth, (authUser) => {
    //   if (authUser === null) {
    //     callback({ type: "AUTH_UNAUTHENTICATED" });
    //     return;
    //   }
    //   // Async callback to appState
    //   updateAppState(authUser);
    // });
    // // Garbage collection
    // return () => unsubscribe();
  };
