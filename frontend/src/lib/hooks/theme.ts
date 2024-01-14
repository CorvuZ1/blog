import { useContext } from "react";
import { IThemeContextValue, ThemeContext } from "~/lib/context/theme/context";

export const useTheme = (): IThemeContextValue => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};
