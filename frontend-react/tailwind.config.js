
 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:
    {
      colors: {
        primary: {
          500: '#FF6363;',
          800: '#FF1313;',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ["Montserrat", "sans-serif"]
      },
      
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
