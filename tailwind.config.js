/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#D2622A',
          'orange-hover': '#B54F1F',
          green: '#3E8E7E',
          'green-hover': '#2F7263',
          navy: '#0F1B24',
          light: '#F7F8FA',
          text: '#1F2933',
          border: '#E4E7EB',
        }
      },
      fontFamily: {
        sans: ['Vazirmatn', 'IRANYekanX', 'Tahoma', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

