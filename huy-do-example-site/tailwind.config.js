/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow': '#FEF3C7',
      'orange': '#FBBF24',
      'blue-light': '#E0F2FE',
      'blue': '#BAE6FD',
      'purple-light': "#78697E",
      'purple': '#331B3B',
      'red-light': '#FEE2E2', 
      'pink': '#FCE7F3',
      'white': '#FFFFFF'
    },
    fontFamily: {
      //Georgia Bold - Title
      'serif': 'Georgia',
      //Aria Bold - Header Bold
      'sans':['Arial'],
    },
    extend: {
      backgroundImage: {
        'page-header': "url('/src/assets/graphics/page-header-graphic.svg')"
      }
    },
  },
  plugins: [],
}

