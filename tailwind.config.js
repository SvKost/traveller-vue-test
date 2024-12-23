/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D',
        lightPrimary: '#FFA279',
        grey: '#2C2C2C80',
        lightGrey: '#2C2C2C1A',
        headerGrey: '#2C2C2C33',
        black: '#2C2C2C',
        white: '#FFF'
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, #FFA279, #F3743D)'
      }
    }
  },
  plugins: []
}
