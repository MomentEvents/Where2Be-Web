import React, { createContext, useEffect, useState } from 'react';

export const AppContext: any = createContext(undefined);

type user = {
  user_id: string;
  created_at: string;
  name: string;
  picture: string;
  email: string;
  about_me: string;
}

const AppProvider = ({ children }) => {
  const [sideMenuOpen, seTsideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    seTsideMenuOpen(!sideMenuOpen);
  };

  const [isDesktop, setIsDesktop] = useState(false);

  const [currentUser, setCurrentUser] = useState<user>()


  useEffect(() => {
    // Update the state based on the window width
    const handleResize = () => {
      setIsDesktop(window.outerWidth >= 800);
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // all values
  const value = {
    toggleSideMenu,
    sideMenuOpen,
    currentUser, 
    setCurrentUser,
    isDesktop
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;