/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#950DB7",
          pink: "#FF00FF",
          orange: "#FF8C00",
          yellow: "#F5b841",
          yellowLight: "#f2cb92",
          orangeDark: "#CC7000",
          blue: "#030649",
          brown: "#6b2c12",
        },
      },
    },
  },
  plugins: [],
};
