// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#d0fdf7',
          200: '#a1fdf0',
          300: '#67fae8',
          400: '#2ff5de',
          500: '#14e8d6',
          600: '#0b6b6f',
          700: '#0b5a5d',
          800: '#0d4949',
          900: '#0f3d3d',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}
