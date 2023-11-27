import { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";
import Head from "next/head";
import { Header } from "~/components/header/header";
import { Container } from "~/components/container/container";
import { SFPro } from "~/lib/utils/fonts/fonts";
import { useTheme } from "~/lib/hooks/useTheme";

export interface ILayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Layout: FC<ILayoutProps> = props => {
  const { children, className, title } = props;

  const { theme } = useTheme();

  const headTitle = title ? `3DS | ${title}` : "3DS";

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <div className={twMerge(SFPro.variable, "font-sf-pro text-md text-white", className, theme)}>
        <div className="font-regular">
          <Container>
            <Header />
            <main className="mt-[55px]">{children}</main>
          </Container>
        </div>
      </div>
    </>
  );
};