/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'code': "url('public/sl_031420_28950_10.jpg')",
      'computer': "url('public/laptop-removebg-preview.png')"
    },
    extend: {
      colors: {
        'app': '#022c22',
        'font': '#e4e4e7'
      },
    },
  },
  plugins: [],
}

