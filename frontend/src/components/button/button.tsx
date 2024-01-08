import { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  appLink?: boolean;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

export const Button: FC<IButtonProps> = props => {
  const { children, appLink = true, className, href, onClick, type = "button" } = props;

  const Tag = href ? (appLink ? Link : "a") : "button";

  return (
    <Tag
      href={href as string}
      type={!href ? type : undefined}
      className={twMerge(
        "bg-light-green hover:bg-light-green/70 inline-block min-h-[43px] rounded-xl bg-right px-[12px] py-[12px] text-center duration-300 hover:bg-left",
        className
      )}
      target={!appLink ? "_blank" : undefined}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
