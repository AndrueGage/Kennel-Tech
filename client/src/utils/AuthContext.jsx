import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from './auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(auth.loggedIn());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn && location.pathname === '/signup') {
      return
    }
    if (!loggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
    if (loggedIn && location.pathname === '/login') {
      navigate('/')
    }
  }, [loggedIn, location.pathname, navigate]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)