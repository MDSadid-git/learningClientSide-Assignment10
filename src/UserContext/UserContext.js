import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleUserRegister = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const gitUserRegister = (provider) => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const newUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInFo = {
    user,
    googleUserRegister,
    gitUserRegister,
    logOut,
    newUserRegister,
  };
  return (
    <AuthContext.Provider value={authInFo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
