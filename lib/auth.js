import React, { useState, useEffect, useContext, createContext } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
const authContext = createContext();

import firebase from "./firebase";
import { createUser } from "./db";

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, user);
      setUser(user);

      Cookies.set("fast-feedback-auth", true, {
        expires: 1,
      });

      return user;
    } else {
      setUser(false);
      Cookies.remove("fast-feedback-auth");
      return false;
    }
  };

  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signinWithPassword = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
      });
  };

  const signupWithPassword = (email, password, displayName) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.updateProfile({
          displayName: displayName,
        });
      })
      .then((user) => {
        handleUser(user);
      });
  };

  const signout = () => {
    Router.push("/");
    return firebase
      .auth()
      .signOut()
      .then((response) => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signupWithPassword,
    signinWithPassword,
    signinWithGoogle,
    signout,
  };
}

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName || user.email,
    token: user.ya,
    provider: user.providerData[0].providerId,
    photoUrl:
      user.providerData[0].photoURL ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH68c9cRiukfBeRV1ofDJWQk8lyoz6ALhy7Q&usqp=CAU",
  };
};
