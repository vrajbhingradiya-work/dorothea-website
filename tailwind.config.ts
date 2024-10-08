import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E8E6E0",
          dark: "#E8E6E0",
          default: "#E8E6E0",
        },
        secondary: {
          light: "#2D3F59", // Lighter shade of primary color
          dark: "#2D3F59", // Primary color
          default: "#2D3F59", // Darker shade of primary color
        },
        gold: "#A89269",
        customGray: "#6B7280",
        customGreen: "#10B981",
        customYellow: "#FBBF24",
        white: "#ffffff",
        black: "#000000",
        grey: "#181818",
        red: {
          default: "#D82B23",
          light: "#E73235",
          dark: "#DC2F32",
        },
      },
    },
  },
  plugins: [],
};
export default config;
