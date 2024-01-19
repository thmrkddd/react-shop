import React, { useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const authContext = React.createContext();
export const useAuth = () => useContext(authContext);
const INIT_STATE = {
  user: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS_USER.CHECK_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
const ACTIONS_USER = {
  CHECK_USER: "CHECK_USER",
};
const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: ACTIONS_USER.CHECK_USER, payload: user });
    });
  };
  useEffect(() => {
    checkUser();
  }, []);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  const values = { register, login, logOut, user: state.user };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
