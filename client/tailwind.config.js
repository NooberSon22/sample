/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        100: "20px",
      },
      backgroundColor: {
        "main-blue": "rgb(200, 150, 80)"
      }
    },
  },
  plugins: [],
}