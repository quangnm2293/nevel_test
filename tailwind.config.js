/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chickyRun: "url('/image_mobile.png')",
        soccer: "url('/Background_desk.png')",
      },
    },
    fontFamily: {
      pingFang: ["PingFang", "sans-serif"],
    },
  },
  plugins: [],
};
