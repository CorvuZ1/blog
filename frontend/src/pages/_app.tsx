import "~/styles/main.css";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "~/lib/context/theme/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
