/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#9ae600',
          secondary: '#3b82f6',
          accent: '#111827',
          bg: '#ffffff',
          text: '#000000',
        },
      },
    },
  },
  plugins: [],
};
