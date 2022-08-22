import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const logout = () => {
    setCurrentUser(null);
  };
};
