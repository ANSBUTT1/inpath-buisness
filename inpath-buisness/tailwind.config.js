/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#00528d',
        secondaryColor: '#000000',
        hoverColor: '#033c64',
        PrimaryBackground: '#f7f9fa',
        secondaryBackground: '#ffffff',
      },
      fontWeight: {
        primaryFont: '700',
      },
    },
  },
  plugins: [],
}