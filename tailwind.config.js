module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
      print: { raw: 'print' }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
