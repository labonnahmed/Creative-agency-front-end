/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      colors:{
        primary: '#111430',
        secondary: '#7AB259'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

