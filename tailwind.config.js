/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      playfair: ["'Playfair'", "serif"],
      satoshi: ["SatoshiVariable", "sans-serif"],
    },
    // colors: {
    //   "custom-beige": "#f6e6d3",
    // },
  },
};
export const plugins = [];
