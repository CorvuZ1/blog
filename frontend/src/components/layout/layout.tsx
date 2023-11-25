import { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";
import { Header } from "~/components/header/header";
import { SFPro } from "~/lib/utils/fonts/fonts";

export interface ILayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout: FC<ILayoutProps> = props => {
  const { children, className } = props;

  return (
    <div className={twMerge(className, SFPro.variable, "font-sf-pro text-md")}>
      <div className="font-regular">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
