import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface IHeaderNavLinkProps {
  className?: string;
  href: string;
  label: string;
}

export const HeaderNavLink: FC<IHeaderNavLinkProps> = props => {
  const { className, href, label } = props;

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};
