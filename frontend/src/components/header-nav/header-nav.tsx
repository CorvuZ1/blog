import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IHeaderNavLinkProps } from "~/components/header-nav-link/header-nav-link";
import { HeaderNavItem } from "../header-nav-item/header-nav-item";

export interface IHeaderNavProps {
  className?: string;
  links: Omit<IHeaderNavLinkProps, "className">[];
}

export const HeaderNav: FC<IHeaderNavProps> = props => {
  const { className, links } = props;

  return (
    <nav>
      <ul className={className}>
        {links.map(item => (
          <HeaderNavItem href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};
