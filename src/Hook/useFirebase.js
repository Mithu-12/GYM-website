import FirebaseInit from "../Firebase/firebase.init";
import {getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged,
} from "firebase/auth";

import { useEffect, useState } from "react";
FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
  return signInWithPopup(auth, googleProvider)
      
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        
      }
    });
  }, []);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {

      });
  };

  const handleUserRegister = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
      
  };

  const handleUserLogin = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
      
  };

  return {
    handleLogout,
    handleUserRegister,
    handleGoogleLogin,
    handleUserLogin,
    user,
    auth
  };
};

export default useFirebase;
