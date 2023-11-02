import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode) {
      setDark(JSON.parse(isDarkMode));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
  }, [dark]);
  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

