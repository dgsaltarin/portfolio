import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#347BFF",
      purple: "#838CE3",
      yellow: "#f9be1e",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        mono: ["monospace "],
      },
    },
  },
  plugins: [],
};
export default config;
