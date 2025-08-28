/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { base: "#0b0b0c" },
      fontFamily: { sans: ["alta","Inter","ui-sans-serif","system-ui","Segoe UI","Roboto","Arial","sans-serif"] },
      boxShadow: { glow: "0 0 40px rgba(255,255,255,0.10)" },
    },
  },
  plugins: [],
};
