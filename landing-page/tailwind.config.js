/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "code-bg-light": "#f8f8f8", // Light background for code blocks
        "code-bg-dark": "#282c34", // Dark background for code blocks
        "code-text": "#000", // Text color for light mode
        "code-text-dark": "#fff", // Text color for dark mode
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],

  darkMode: "class", // this selector mean, based upon the sepecific selector change the dark and light theme
};
