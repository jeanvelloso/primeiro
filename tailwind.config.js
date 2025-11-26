/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        brandDark: 'var(--color-brand-dark)',
      },
    },
  },
  plugins: [],
}

