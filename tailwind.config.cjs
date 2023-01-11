/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#226FB7',
        },
      }
    },
  },
  plugins: [],
}
