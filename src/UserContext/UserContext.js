import React from "react";
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const user = { name: "sadid" };
  const googleUserRegister = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInFo = { user, googleUserRegister };
  return (
    <AuthContext.Provider value={authInFo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
