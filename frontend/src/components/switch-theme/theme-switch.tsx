import { FC } from "react";
import { Switch } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "~/lib/hooks/theme";

export const SwitchTheme: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isChecked = theme === "dark";

  return (
    <Switch
      checked={isChecked}
      onChange={toggleTheme}
      ripple={false}
      className="checked:bg-translucent-green bg-translucent-green h-full w-full"
      containerProps={{
        className: "w-11 h-5"
      }}
      circleProps={{
        className: twMerge(
          "w-[24px] h-[24px] before:hidden flex items-center justify-center left-[-2px] after:bg-[length:contain] border-none bg-light-green after:absolute after:bg-center after:bg-no-repeat",
          isChecked
            ? "after:bg-[url('/icons/dark.svg')] after:w-[12px] after:h-[12px]"
            : "after:bg-[url('/icons/light.svg')] after:w-[21px] after:h-[21px]"
        )
      }}
    />
  );
};
