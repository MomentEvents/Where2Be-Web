import React, { createContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners"; // Import a spinner from react-spinners
import styled from "styled-components";

type AppContextType = {
  sideMenuOpen: boolean;
  toggleSideMenu: () => void;
  isDesktop: boolean;
  currentUser?: user; // Optional because it's initialized as undefined
  setCurrentUser: (user: user) => void;
  showLoading: () => void;
  hideLoading: () => void;
  isLoading: boolean;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type user = {
  user_id: string;
  created_at: string;
  name: string;
  picture: string;
  email: string;
  about_me: string;
};

// Styled component for the overlay
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// You can add more styles to Spinner if needed
const Spinner = styled(ClipLoader)`
  // Add any additional styles if necessary
`;

const AppProvider = ({ children }) => {
  const [sideMenuOpen, seTsideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    seTsideMenuOpen(!sideMenuOpen);
  };

  const [isDesktop, setIsDesktop] = useState(false);

  const [currentUser, setCurrentUser] = useState<user>();
  // State and functions for global loading
  const [isLoading, setIsLoading] = useState(false);
  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

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
    isDesktop,
    showLoading,
    hideLoading,
    isLoading,
  };
  return (
    <AppContext.Provider value={value}>
      {isLoading && (
        <LoadingOverlay>
          <Spinner color="#FFFFFF" size={100} />
        </LoadingOverlay>
      )}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
