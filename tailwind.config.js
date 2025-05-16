/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#e74c3c', // Ana kırmızı renk
          600: '#c0392b', // Daha koyu kırmızı (arka plan için)
        },
        black: '#0a0a0a',
      },
    },
  },
  plugins: [],
}

