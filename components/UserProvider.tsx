import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
interface Props {}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number | string | undefined;
}

interface UserContext extends User {
  set: (user: User) => void;
  logout: () => void;
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

const USER_TASKS_QUERY = gql`
  query TasksQuery($id: String) {
    readTasks(filter: { assignedTo: { eq: $id } })
  }
`;
const userContext = createContext<UserContext>({ ...emptyUser, set: () => {}, logout: () => {} });

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>(emptyUser);
  useEffect(() => {
    console.log("User changed!", user);
  }, [user]);

  const logout = () => {
    setUser(emptyUser);
  };

  useEffect(() => {});

  return (
    <userContext.Provider value={{ ...user, set: setUser, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
