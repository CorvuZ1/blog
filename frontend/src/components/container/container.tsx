import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IContainer {
  className?: string;
  children: ReactNode;
}

export const Container: FC<IContainer> = props => {
  const { className, children } = props;

  return <div className={twMerge("mx-auto max-w-[800px] px-[20px]", className)}>{children}</div>;
};
