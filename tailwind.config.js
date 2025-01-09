/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          500 : "#10b766",
          600 : "#04a658"
        }
      }
    },
  },
  plugins: [],
}