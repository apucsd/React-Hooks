import React, { ReactNode, createContext, useState } from "react";
type TThemeProviderProps = {
  children: ReactNode;
};
export type TThemeContextProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = createContext<TThemeContextProps | undefined>(
  undefined
);

const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(false);
  const themeInfo = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
