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
      className={twMerge(
        "bg-light-green hover:bg-light-green/70 inline-block rounded-xl bg-right px-[25px] py-[12px] text-center duration-300 hover:bg-left",
        className
      )}
      target={!appLink ? "_blank" : undefined}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
