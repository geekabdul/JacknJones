// AuthContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from AsyncStorage on app startup
    loadUserFromStorage();
  }, []);

  const login = userData => {
    // You can implement your login logic here
    setUser(userData);
    AsyncStorage.setItem('userData', JSON.stringify(userData));
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
    AsyncStorage.removeItem('userData');
  };

  const loadUserFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user data from AsyncStorage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
