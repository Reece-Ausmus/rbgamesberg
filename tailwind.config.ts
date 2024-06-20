import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      scheme1a: '#cca153',
      scheme1b: '#b9cc53',
      scheme1c: '#cc6553',
      scheme1ad: '#70592e',
      scheme1bd: '#66702e',
      scheme1cd: '#70372e',
      s2a: '#4BE1E1',
      s2b: '#3D6DB6',
      s2c: '#DB7BF4',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
