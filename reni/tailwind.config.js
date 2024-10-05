/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.4s ease-out forwards',
        slideOut: 'slideOut 0.4s ease-in forwards',
      },
    
  
      colors: {
        customLightBlue: '#F1F6FD',
        customDeepBlue: '#001E88',
        lightGray: '#757E9F' ,
        customBlack: '#00000026',
        customGreen: '#12B76A',
        customGray: '#667085',
        DeepGray: '#474E67',
        OffWhite: '#F3F3F3',
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        
      },
    },
  },
  plugins: [],
}
