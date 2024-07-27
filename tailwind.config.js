import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: {
        hide: "scrollbar-width: none; -ms-overflow-style: none;",
      },
      backgroundColor: {
        header: "#090118",
        button: "#1D7F75",
        t: "#232323",
        border: "#CECECE",

        n: {
          1: "#FFDB00",
          2: "#FFCF4F",
          // 1: "#F9F9F6", // text and {background}
          // 2: "#F1EEE4",
          // 3: "#FF6134",
          // 4: "#FE208D",
          // 5: "#1D7F75",
          // 6: "#b47cfd",
          // 7: "#FFDE4B",
        },
      },
      colors: {
        yellow: "#FFDB00",
        purple: "#b47cfd",
        pink: "#ff80bf",
        skinkColor: "#ffa68a",
        bg: "#0a0118",

        textPink: "#ff7fc2",
        iconsPink: "#ff7fc2",
        stroke: {
          1: "#26242C",
        },
      },
      backgroundImage: {
        "linear-gradient": "linear-gradient(150deg, purple, pink,orange);",
        "conic-gradient":
          "conic-gradient(from 360deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        space: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        less: "-0.3px",
        1: "1px",
        2: "2px",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        appear: "appear 1s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
