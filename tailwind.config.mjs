/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '960px',
      xl: '1280px',
      xlr: '1440px',
    },
    extend: {
      colors: {
        black: {
          600: '#1A1A1A',
        },
        white: {
          500: '#ebebeb',
        },
      },
    },
  },
  plugins: [],
};