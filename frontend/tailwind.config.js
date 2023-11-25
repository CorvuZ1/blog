/** @type {import("tailwindcss").Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

const isDev = process.env.NODE_ENV === "development";
const modulesPath = isDev ? "../node_modules" : "node_modules";

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    `${modulesPath}/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}`,
    `${modulesPath}/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}`
  ],
  theme: {
    extend: {
      fontWeight: {
        regular: "400",
        heavy: "800"
      },
      fontFamily: {
        "sf-pro": ["var(--sf-pro)", "sans-serif"]
      },
      fontSize: {
        xs: ["12px", "normal"],
        sm: ["14px", "normal"],
        md: ["16px", "normal"],
        lg: ["20px", "normal"],
        xl: ["24px", "normal"],
        xxl: ["32px", "normal"]
      }
    }
  },
  plugins: []
});
