/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      screens: {
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        cyan: {
          400: '#226FB7',
        },
      },
      fontSize: {
        xs: '7px',
        sm: '10px',
        base: '15px',
      }
    },
  },
  plugins: [],
}
