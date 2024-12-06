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
        Game: ["Faculty Glyphic", "sans-serif"],
        Popins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'Gaming': "url('/src/assets/img1.jpg')",
        'profile': "url('/src/assets/my-profile.jpg')",
        'review': "url('/src/assets/img3.jpg')",
        'cars': "url('/src/assets/img2.jpg')"
      },
    },
  },
  plugins: [daisyui],
}

