import { createContext, useState, useEffect, useContext } from "react";
import { checkUserAuthStatusAPI } from "../apis/users/userAPI";

import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //make request using react query
  const { isError, isLoading, data, isSuccess } = useQuery({
    queryFn: checkUserAuthStatusAPI,
    queryKey: ["authorization"],
  });
  //update authenticated user
  useEffect(() => {
    if (isSuccess) {
      setIsAuthenticated(data);
    }
  }, [data, isSuccess]);

  //update  user auth after login
  const login = () => {
    setIsAuthenticated(true);
  };

  //update the user with auth after logout
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isError, isLoading, isSuccess, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
