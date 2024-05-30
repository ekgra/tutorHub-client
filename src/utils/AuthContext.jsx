import axios from 'axios'; 

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { fireBaseAuth } from '../config/firebase-config';
import { decodeJWT } from '../utils/decodeJWT';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [googleToken, setGoogleToken] = useState('');
  const [appToken, setAppToken] = useState('');
  const [appAuth, setAppAuth] = useState({});
  const [googleAuth, setGoogleAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = fireBaseAuth.onAuthStateChanged(async (userCred) => {
      if (userCred) {
        const idToken = await userCred.getIdToken();
        handleAuth(idToken);
      } else {
        setGoogleToken('');
        setAppToken('');
        setAppAuth({});
        setGoogleAuth({});
        setAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuth = async (idToken) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth', 
                                        {},
                                        { headers: { Authorization: idToken }
                       });
      const { jwtToken } = response.data;

      setGoogleToken(idToken);
      setGoogleAuth(decodeJWT(idToken));
      setAppToken(jwtToken);
      setAppAuth(decodeJWT(jwtToken));
      setAuth(true);

      document.cookie = `token=${jwtToken};path=/;max-age=${4 * 24 * 60 * 60};HttpOnly`; // Set JWT token in HTTP-only cookie
    } catch (error) {
      console.error('Error during authentication with backend:', error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const userCred = await signInWithPopup(fireBaseAuth, new GoogleAuthProvider());
      if (userCred) {
        const idToken = await userCred.user.getIdToken();
        handleAuth(idToken);
        navigate('/'); // Redirect to home page after login
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(fireBaseAuth);
      setAuth(false);
      setGoogleToken('');
      setAppToken('');
      setAppAuth({});
      setGoogleAuth({});
      document.cookie = 'token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT'; // Clear the JWT token
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, googleAuth, appAuth, googleToken, appToken, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
