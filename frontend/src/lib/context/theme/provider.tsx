import { FC, ReactNode, useState } from "react";
import { ThemeContext, IThemeContextValue } from "./context";

export interface IThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<IThemeContextValue["theme"]>("dark");

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
