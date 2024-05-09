/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto_slab : ["Roboto Slab", "serif"],
        roboto_serif : ["Roboto Serif", "serif"],
        roboto_condensed: ["Roboto Condensed", "sans-serif"],
        open_sans : ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

