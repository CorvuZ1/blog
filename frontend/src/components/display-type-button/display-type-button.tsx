import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button/button";
import { Icon } from "~/components/icon/icon";

export interface IDisplayTypeButton {
  className?: string;
  type: "grid" | "row";
  onClick?: () => void;
  isActive?: boolean;
}

export const DisplayTypeButton: FC<IDisplayTypeButton> = props => {
  const { type, className, onClick, isActive } = props;

  return (
    <Button
      onClick={onClick}
      className={twMerge(
        "bg-dark-green group flex h-[45px] w-full max-w-[45px] items-center justify-center rounded-[5px]",
        isActive && "bg-light-green",
        className
      )}
    >
      <Icon
        name={type}
        className={twMerge(
          "text-light-green",
          isActive ? "text-dark-green" : "group-hover:text-dark-green"
        )}
      />
    </Button>
  );
};
