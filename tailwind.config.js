/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'media' or 'class'

  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

