/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'library': "url('https://assets.weforum.org/article/image/responsive_big_webp_hySrQhk9QgN45B-0z8PR0bd8ZRyDZ9LnvzPSGaIb91Q.webp')",
      }
    },
  },
  plugins: [],
}
