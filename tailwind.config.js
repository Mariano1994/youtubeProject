/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(10rem, 16rem) 1fr",
      },
    },
  },
  plugins: [],
};
