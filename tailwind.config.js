const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
...defaultTheme,
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', '...defaultTheme.fontFamily.sans'],
      },
    },
  },
}