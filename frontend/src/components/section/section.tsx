import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ISectionProps {
  children: ReactNode;
  className?: string;
  isDiv?: boolean;
}

export const Section: FC<ISectionProps> = props => {
  const { children, className, isDiv } = props;

  const Tag = isDiv ? "div" : "section";

  return <Tag className={twMerge("mb-[55px] last:mb-0", className)}>{children}</Tag>;
};
