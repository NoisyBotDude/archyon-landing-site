/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#fbbf24', // amber-400
          400: '#fbbf24',
          500: '#f59e0b',
        },
        secondary: {
          DEFAULT: '#67e8f9', // cyan-300
          300: '#67e8f9',
          400: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
}

