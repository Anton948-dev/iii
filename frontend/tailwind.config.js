/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5C3DF5', // Primary brand color - vibrant purple
          light: '#7A5FF7',
          dark: '#4029D3',
        },
        secondary: {
          DEFAULT: '#00C2CB', // Secondary accent - teal
          light: '#2EEFF7',
          dark: '#00909A',
        },
        neutral: {
          dark: '#121219', // Near black shade
          medium: '#2A2A3C',
          light: '#F8F9FF', // Off-white
        },
        highlight: '#FF4D8F', // Highlight color - pink
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem', // 72px
        '8xl': '6rem',   // 96px
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 4px 30px rgba(92, 61, 245, 0.2)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #5C3DF5 0%, #3429D3 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00C2CB 0%, #2EEFF7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #121219 0%, #2A2A3C 100%)',
      },
    },
  },
  plugins: [],
};