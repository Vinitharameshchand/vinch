/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vinch: {
          beige: '#E8DCCF',
          cream: '#F5EFE7',
          taupe: '#CBBBA0',
          espresso: '#3E2F2F',
          gold: '#C6A969',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

