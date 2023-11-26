import { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";
import { Header } from "~/components/header/header";
import { SFPro } from "~/lib/utils/fonts/fonts";
import { Container } from "../container/container";

export interface ILayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout: FC<ILayoutProps> = props => {
  const { children, className } = props;

  return (
    <div
      className={twMerge(SFPro.variable, "font-sf-pro text-md text-ellipsis text-white", className)}
    >
      <div className="font-regular">
        <Container>
          <Header />
          <main>{children}</main>
        </Container>
      </div>
    </div>
  );
};
