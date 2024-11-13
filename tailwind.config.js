/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chickyRun: "url('/image_mobile.png')",
        soccer: "url('/Background_desk.png')",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(0px)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        slideRight1s: "slideRight 700ms ease-in-out forwards;",
        slideLeft1s: "slideLeft 700ms ease-in-out forwards;",
        slideRight2s: "slideRight 1500ms ease-in-out forwards;",
        slideLeft2s: "slideLeft 1500ms ease-in-out forwards;",
      },
    },
    fontFamily: {
      pingFang: ["PingFang", "sans-serif"],
    },
  },
  plugins: [],
};
