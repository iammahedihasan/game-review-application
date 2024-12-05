

import { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  // signInWithEmailAndPassword,
  // signOut,
  // updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.init';



export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const authValue = {
    user,
    createUser,
    loading,
    setLoading,


  };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
