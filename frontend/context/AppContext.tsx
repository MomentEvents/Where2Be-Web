import React, { createContext, useState } from 'react';

export const AppContext: any = createContext(undefined);

type user = {
  user_id: string;
  created_at: string;
  name: string;
  picture: string;
}

const AppProvider = ({ children }) => {
  const [sideMenuOpen, seTsideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    seTsideMenuOpen(!sideMenuOpen);
  };

  const [currentUser, setCurrentUser] = useState<user>()

  // all values
  const value = {
    toggleSideMenu,
    sideMenuOpen,
    currentUser, 
    setCurrentUser
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;