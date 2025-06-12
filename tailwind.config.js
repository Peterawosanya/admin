/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '.theme-dark'],
  theme: {
    extend: {
      colors: {
        darkbg: '#18181b',
        darkcard: '#23232a',
        darktext: '#f1f5f9',
        greybg: '#e5e7eb',
        greycard: '#f3f4f6',
        greytext: '#374151',
      },
    },
  },
  plugins: [],
};
