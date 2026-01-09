import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const currentUser = (AuthService.getCurrentUser())
    if (currentUser) {
      setUser(currentUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    const user = await AuthService.login(email, password)
    setUser(user);
    setIsAuthenticated(true);
    return user;
  }

  const logout = () => {
    AuthService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }

  const register = async (nickname, email, password) => {
    const newRegistar =  await AuthService.register(nickname, email, password)
    setUser(newRegistar)
    setIsAuthenticated(true)
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
