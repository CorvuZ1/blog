import { FC, ReactNode, SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export const Select: FC<ISelectProps> = props => {
  const { children, className, ...rest } = props;

  return (
    <select {...rest} className={twMerge("bg-dark-green", className)}>
      {children}
    </select>
  );
};
