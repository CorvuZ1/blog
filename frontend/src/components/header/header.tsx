import { FC } from "react";
import { HeaderNav } from "~/components/header-nav/header-nav";
import { HEADER_NAVIGATION } from "~/data/header-navigation/header-navigation";
import { Image } from "~/components/image/image";

export interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Image isLazy={false} src="/imgs/base/logo.svg" width={78} height={27} alt="3DS лого" />
      <HeaderNav links={HEADER_NAVIGATION} />
    </header>
  );
};
