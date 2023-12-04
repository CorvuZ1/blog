import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderNav } from "~/components/header-nav/header-nav";
import { Image } from "~/components/image/image";
import { SwitchTheme } from "~/components/switch-theme/theme-switch";
import { HEADER_NAVIGATION } from "~/data/header-navigation/header-navigation";

export interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={twMerge("flex items-end pt-[24px]", className)}>
      <Image className="mr-auto" src="/imgs/base/logo.svg" width={78} height={27} alt="3DS лого" />
      <HeaderNav links={HEADER_NAVIGATION} />
      <SwitchTheme />
    </header>
  );
};
