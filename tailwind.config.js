/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'code': "url('src/assets/sl_031420_28950_10.jpg')",
      'computer': "url('src/assets/laptop-removebg-preview.png')"
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

