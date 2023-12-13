import { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";
import Head from "next/head";
import { Header } from "~/components/header/header";
import { Container } from "~/components/container/container";
import { FixedNav } from "~/components/fixed-nav/fixed-nav";
import { SFPro } from "~/lib/utils/fonts/fonts";
import { useTheme } from "~/lib/hooks/theme";
import { HEADER_NAVIGATION, FIXED_NAV_NAVIGATION } from "~/data/navigation/navigation";

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
            <Header navLinks={HEADER_NAVIGATION} className="mb-[55px]" />
          </Container>
          <main className="pb-[90px]">
            {children}
            <FixedNav className="z-10" links={FIXED_NAV_NAVIGATION.about} />
          </main>
        </div>
      </div>
    </>
  );
};
