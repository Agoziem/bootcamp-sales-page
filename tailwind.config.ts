import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px", // Customized for smaller screens
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px"
        },
      },
      colors: {
        primary: "#100E86",
        dark: "#292929",
        light: "#FFFFFF",
        gold: "#FBBC04",
        grey: "#C4C4C4"
      },
    },
  },
  plugins: [],
};
export default config;
