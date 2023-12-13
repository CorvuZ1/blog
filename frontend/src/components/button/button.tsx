import { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  appLink?: boolean;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = props => {
  const { children, appLink = true, className, href, onClick } = props;

  const Tag = href ? (appLink ? Link : "a") : "button";

  return (
    <Tag
      href={href as string}
      className={twMerge("", className)}
      target={!appLink ? "_blank" : undefined}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
