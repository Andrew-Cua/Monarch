module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#701E7B',
        secondary: '#290849',
      },
      width: {
        'near': '90%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
