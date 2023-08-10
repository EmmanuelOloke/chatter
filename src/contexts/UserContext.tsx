import React, { createContext, useContext, useState } from 'react';

type UserProps = {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  profession: string;
  password: string;
  confirmPassword: string;
  profileImage: string;
  _v: number;
};

interface UserContextType {
  user: UserProps | null;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
}

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const contextValue = {
    user,
    setUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
