import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "code-bg-light": "#f8f8f8", // Light background for code blocks
        "code-bg-dark": "#282c34", // Dark background for code blocks
        "code-text": "#000", // Text color for light mode
        "code-text-dark": "#fff", // Text color for dark mode
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;
