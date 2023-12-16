import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { withAnimation } from "~/lib/hocs/with-animation";

export interface ISectionProps {
  children: ReactNode;
  className?: string;
  isDiv?: boolean;
}

const _Section: FC<ISectionProps> = props => {
  const { children, className, isDiv } = props;

  const Tag = isDiv ? "div" : "section";

  return <Tag className={twMerge("mb-[55px]", className)}>{children}</Tag>;
};

export const Section = withAnimation<ISectionProps>(_Section);
