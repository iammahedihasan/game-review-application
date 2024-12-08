

import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.init';



export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();


  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubcribe();
    };
  }, [auth]);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signUpGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

 

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUser = update => {
    setLoading(true)
    return updateProfile(auth.currentUser, update);
  };

  const authValue = {
    user,
    createUser,
    signInUser,
    signUpGoogle,
    signOutUser,
    updateUser,
    loading

   


  };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
