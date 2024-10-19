import { UserModel } from "@/models/user-model";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface UserStateContextType {
  user: UserModel | null;
  setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
}

const UserStateContext = createContext<UserStateContextType | undefined>(
  undefined
);

export const useUserState = () => {
  const context = useContext(UserStateContext);

  if (!context) {
    throw new Error("useUserState must be used within a UserStateProvider");
  }

  return context;
};

interface UserStateProviderProps {
  children: ReactNode;
}

export const UserStateProvider: React.FC<UserStateProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserModel | null>(null);

  return (
    <UserStateContext.Provider value={{ user, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
};
