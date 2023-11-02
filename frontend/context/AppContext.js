import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sideMenuOpen, seTsideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    seTsideMenuOpen(!sideMenuOpen);
  };

  // all values
  const value = {
    toggleSideMenu,
    sideMenuOpen,

  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;