import React, { Children, createContext, useContext, useEffect, useState } from "react";

interface Props {}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number | string | undefined;
}

interface UserContext extends User {
  set: (user: User) => void;
}

const emptyUser = {
  firstName: "",
  lastName: "",
  email: "",
  id: undefined,
};

export const useUser = () => {
  return useContext(userContext);
};

const userContext = createContext<UserContext>({ ...emptyUser, set: () => {} });

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>(emptyUser);
  useEffect(() => {
    console.log("User changed!", user);
  }, [user]);

  return <userContext.Provider value={{ ...user, set: setUser }}>{children}</userContext.Provider>;
};

export default UserProvider;
