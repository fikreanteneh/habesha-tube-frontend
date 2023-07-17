import { createContext, useContext, useState } from 'react';


// Define your ThemeProvider context
export const ThemeContext = createContext({});
export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {

  const [currentTheme, setCurrentTheme] = useState('light');
  const changeTheme = (theme) => setCurrentTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
