import React, { useState, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../index";
const AuthContext = React.createContext<{ user: string | null }>({
  user: null,
});
// const auth = getAuth(app);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // const getAuth = auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user.email);
    //   }
    // });
    // return () => getAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
