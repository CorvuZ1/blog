import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IContainerProps {
  className?: string;
  children: ReactNode;
  size?: "lg" | "xs";
}

export const Container: FC<IContainerProps> = props => {
  const { className, children, size = "xs" } = props;

  const sizes: Record<NonNullable<IContainerProps["size"]>, string> = {
    lg: "max-w-[800px] px-[25px]",
    xs: "max-w-[700px] px-[50px]"
  };

  return <div className={twMerge(sizes[size], "mx-auto md:px-[15px]", className)}>{children}</div>;
};
