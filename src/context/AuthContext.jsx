import React, { createContext, useState, useEffect } from 'react';
import { fetchProfile, loginUser, logoutUser, registerUser } from '../api/auth';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const data = await fetchProfile();
      if (data.user) {
        setUser(data.user);
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    const data = await loginUser(username, password);
    if (data.user) {
      setUser(data.user);
    }
    return data;
  };

  const register = async (username, password) => {
    const data = await registerUser(username, password);
    return data;
  };

  const loginWithGoogle = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:5000/auth/logout', {
        credentials: 'include',
      });
      setUser(null);
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
} 