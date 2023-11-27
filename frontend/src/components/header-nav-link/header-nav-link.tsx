import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface IHeaderNavLinkProps {
  className?: string;
  href: string;
  label: string;
}

export const HeaderNavLink: FC<IHeaderNavLinkProps> = props => {
  const { className, href, label } = props;

  const { pathname } = useRouter();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={twMerge(
        "opacity-90 duration-200 hover:opacity-100",
        isActive &&
          "after:bg-green after:animate-smooth-appearance flex justify-center opacity-100 after:absolute after:bottom-[-17px] after:h-[10px] after:w-[10px] after:rounded after:content-['']",
        className
      )}
    >
      {label}
    </Link>
  );
};
