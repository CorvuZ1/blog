import { createContext } from "react";

export interface IThemeContextValue {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextValue>({} as IThemeContextValue);
