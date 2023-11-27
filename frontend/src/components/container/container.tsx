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
    lg: "max-w-[800px]",
    sm: "max-w-[600px]"
  };

  return <div className={twMerge(sizes[size], "mx-auto px-[20px]", className)}>{children}</div>;
};
