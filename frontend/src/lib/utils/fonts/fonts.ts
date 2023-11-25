import localFont from "next/font/local";

export const SFPro = localFont({
  src: [
    {
      path: "../../../../public/fonts/SFPro/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../../../public/fonts/SFPro/SFProDisplay-Semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../../../public/fonts/SFPro/SFProDisplay-Heavy.woff2",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--sf-pro"
});
