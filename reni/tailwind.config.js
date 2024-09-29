/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#F1F6FD',
        customDeepBlue: '#001E88',
        lightGray: '#757E9F' ,
        customBlack: '#00000026',
        customGreen: '#12B76A',
        customGray: '#667085',
        DeepGray: '#474E67',
        OffWhite: '#F3F3F3',
        
      },
    },
  },
  plugins: [],
}
