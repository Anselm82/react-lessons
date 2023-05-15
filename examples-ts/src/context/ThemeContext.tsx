import { FC, createContext, useState } from "react";

const ThemeContext = createContext<any>(null);

const ThemeProvider : FC<{children: any}> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export { ThemeContext, ThemeProvider };