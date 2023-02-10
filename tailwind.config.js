/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f5f3f2',
          200: '#f3f1e7',
          300: '#e4e2e0',
          400: '#d4cec7'
        },
        secondary: {
          red: {
            100: '#bf3a2f',
            200: '#ab2825',
            300: '#6f1915',
            400: '#581314'
          },
          blue: {
            100: '#b1dff5',
            200: '#2e69a2',
            300: '#1d509b',
            400: '#10346d'
          },
          brown: {
            100: '#d8c097',
            200: '#c29e5f',
            300: '#94733b',
            400: '#69512a'
          },
          green: {
            100: '#f0f1ec',
            200: '#d7d9d4',
            300: '#a9c0a6',
            400: '#586147'
          },
        }
      },
      fontFamily: {
        barlow: ['Barlow'],
        easyRider: ['Easy Rider'],
      
      },
    },
  },
  plugins: [],
}