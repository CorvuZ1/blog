import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IContainerProps {
  className?: string;
  children: ReactNode;
  size?: "lg" | "sm";
}

export const Container: FC<IContainerProps> = props => {
  const { className, children, size = "lg" } = props;

  const sizes: Record<NonNullable<IContainerProps["size"]>, string> = {
    lg: "max-w-[800px] px-[25px] md:px-[15px]",
    sm: "max-w-[750px] px-[75px] md:px-[30px]"
  };

  return <div className={twMerge(sizes[size], "mx-auto", className)}>{children}</div>;
};
