import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header: "#090118",
        button: "#1D7F75",
        t: "#232323",
        border: "#CECECE",

        n: {
          1: "#F9F9F6", // text and {background}
          2: "#F1EEE4",
          3: "#FF6134",
          4: "#FE208D",
          5: "#1D7F75",
          6: "#b47cfd",
          7: "#F9F9F6",
        },
      },
      colors: {
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
        song: ["Song Myung", ...defaultTheme.fontFamily.serif],
        spartan: ["League Spartan", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        slab: ["Roboto Slab", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        less: "-0.3px",
        1: "1px",
        2: "2px",
      },
      keyframes: {
        down: {
          "0%": {
            height: "0",
            opacity: "0",
          },
          "50%": {
            color: "transparent",
          },
          "100%": {
            height: "17%",
            opacity: "1",
          },
        },
        up: {
          "0%": {
            height: "32%",
          },
          "100%": {
            height: "0",
          },
        },
        jelly: {
          "0%": { transform: "translateY(-100%)" },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "jelly-out": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "80%": { opacity: "0.5" },
          "100%": { transform: "translateY(-100%)", opacity: "1" },
        },
      },
      animation: {
        dropdown: "down 0.3s ease ",
        closedropdown: "up 0.4s ease-in-out ",
        jelly: "jelly 0.5s ease-in-out forwards",
        "jelly-out": "jelly-out 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
