import { useContext } from "react";
import { ThemeContext } from "~/lib/context/theme/context";

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};
