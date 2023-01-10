/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   primary: "Saira",
    // },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#191919",
        accent: "#d8c278",
        grey: {
          DEFAULT: "#919297",
          1: "#707070",
          2: "#E7E9EB",
          3: "#F5F5F5",
        },
        white: "#f7f7f6",
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
