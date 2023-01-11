/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },

    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(136, 65%, 51%)",
          1: "hsl(192, 70%, 51%)",
          2: "hsl(233, 26%, 24%)",
        },
        grey: {
          DEFAULT: "hsl(0, 0%, 98%)",
          1: "hsl(220, 16%, 96%)",
          2: "hsl(233, 8%, 62%)",
        },
        white: "hsl(0, 0%, 100%)",
        secondary: "#4d4d4d",
      },
      backgroundImage: {
        // hero: 'url("/src/assets/img/heroimg.jpg")',
        // newsletter: 'url("/src/assets/newsletter.png")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
