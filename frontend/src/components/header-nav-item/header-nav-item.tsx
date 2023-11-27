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

  return (
    <li className={twMerge("relative mr-[40px] last:mr-0", className)}>
      <HeaderNavLink href={href} label={label} />
    </li>
  );
};
