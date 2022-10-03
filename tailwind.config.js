/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      'mb': '380px',
      'mv' : '400px',
      'xsm' : '480px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1500px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    },
    
  },

  plugins: [],
};

