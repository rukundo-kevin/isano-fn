/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#1280a3",
        "light-bg": "#F9F9FB",
        "light-text": "#111827",
        "dark-text-fill": "#F3F4F6",
        "dark-bg": "#1F2A37",
        "dark-frame-bg": "#262E3D",
        "dark-tertiary": "#374151",
      },
    },
  },
  plugins: [],
};
