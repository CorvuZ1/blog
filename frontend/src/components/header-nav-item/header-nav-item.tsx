import { useRouter } from "next/router";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderNavLink, IHeaderNavLinkProps } from "~/components/header-nav-link/header-nav-link";

export interface IHeaderNavItemProps {
  className?: string;
  href: IHeaderNavLinkProps["href"];
  label: IHeaderNavLinkProps["label"];
}

export const HeaderNavItem: FC<IHeaderNavItemProps> = props => {
  const { className, href, label } = props;

  const { pathname } = useRouter();

  const isActive = pathname === href;

  return (
    <li className={twMerge(isActive && "bg-[red]", className)}>
      <HeaderNavLink href={href} label={label} />
    </li>
  );
};
