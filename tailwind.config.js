/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chickyRun: "url('src/assets/images/Image.png')",
        soccer: "url('src/assets/images/Background_desk.png')",
      },
    },
    fontFamily: {
      pingFang: ["PingFang", "sans-serif"],
    },
  },
  plugins: [],
};
