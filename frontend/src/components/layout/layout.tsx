import { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";
import Head from "next/head";
import { Header } from "~/components/header/header";
import { Container } from "~/components/container/container";
import { FixedNav } from "~/components/fixed-nav/fixed-nav";
import { SFPro } from "~/lib/fonts/fonts";
import { useTheme } from "~/lib/hooks/theme";

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
      <div
        className={twMerge(
          SFPro.variable,
          "font-sf-pro text-md overflow-hidden text-white",
          className,
          theme
        )}
      >
        <div className="font-regular">
          <Container>
            <Header className="mb-[55px]" />
          </Container>
          <main className="pb-[100px]">
            {children}
            <FixedNav className="z-10" />
          </main>
        </div>
      </div>
    </>
  );
};
