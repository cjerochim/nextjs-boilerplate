import { AuthContext } from "src/machines/appMachine";

const toInvalidLoginMessage = (errorCode: AuthContext["errorCode"]): string => {
  switch (errorCode) {
    // Generalise message, not ideal advising user on specific detail
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Invalid login credentials";
    case "auth/too-many-requests":
      return "Tried too many times, please wait and try again later";
    default:
      // Return empty string if no error
      return "";
  }
};

export default toInvalidLoginMessage;
