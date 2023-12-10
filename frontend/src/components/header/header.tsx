import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderNav, IHeaderNavProps } from "~/components/header-nav/header-nav";
import { Image } from "~/components/image/image";
import { SwitchTheme } from "~/components/switch-theme/theme-switch";

export interface IHeaderProps {
  className?: string;
  navLinks: IHeaderNavProps["links"];
}

export const Header: FC<IHeaderProps> = props => {
  const { className, navLinks } = props;

  return (
    <header className={twMerge("flex items-end pt-[24px]", className)}>
      <Image className="mr-auto" src="/imgs/base/logo.svg" width={78} height={27} alt="3DS лого" />
      <HeaderNav links={navLinks} />
      <SwitchTheme />
    </header>
  );
};
