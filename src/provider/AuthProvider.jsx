

import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
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
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
console.log(user);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => {
      unsubcribe();
    };
  }, [auth]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signUpGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const signUpGithub = () => {
    return signInWithPopup(auth,githubProvider)
  } 

  const signOutUser = () => {
    return signOut(auth)
  }

  const updateUser = update => {
    return updateProfile(auth.currentUser, update);
  };

  const authValue = {
    user,
    createUser,
    signInUser,
    signUpGoogle,
    signUpGithub,
    signOutUser,
    updateUser

   


  };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
