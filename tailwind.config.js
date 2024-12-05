import daisyui from 'daisyui';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        Game: ["Faculty Glyphic", "sans-serif"]
      },
      backgroundImage: {
        'Gaming': "url('/src/assets/img1.jpg')",
      },
    },
  },
  plugins: [daisyui],
}

