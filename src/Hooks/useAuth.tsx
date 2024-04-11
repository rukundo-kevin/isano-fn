/* eslint-disable */
import { createContext, ReactNode, useState } from "react";

const getInitialState = () => {
  if (window && window.localStorage) {
    const storedUser = window.localStorage.getItem("auth");
    if (storedUser) return JSON.parse(storedUser);
  }
  return { name: "", role: "user", auth: false };
};
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export const UserContext = createContext<any>(getInitialState);

function UserProvider({ children, ...props }: Props) {
  const [user, setUser] = useState<any>(getInitialState);
  const login = (data: any) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        id: data?.user?.id,
        firstname: data?.user?.firstName,
        lastname: data?.user?.lastName,
        auth: true,
        role: data?.user?.isAdmin ? "ADMIN" : "USER",
      })
    );
    setUser(() => ({ ...data?.user, auth: true }));
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth");

    setUser(() => ({ userData: {}, name: "", role: "user", auth: false }));
    console.log(user)
  };

  return (
    <UserContext.Provider {...props} value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
