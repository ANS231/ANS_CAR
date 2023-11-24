/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,json}',
    './components/**/*.{js,ts,jsx,tsx,mdx,json}',
    './app/**/*.{js,ts,jsx,tsx,mdx,json}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        'magenta': {
          '50': '#fcf3ff',
          '100': '#f7e6ff',
          '200': '#efccff',
          '300': '#e6a4ff',
          '400': '#d96eff',
          '500': '#c744fd',
          '600': '#aa18e1',
          '700': '#9010bb',
          '800': '#780f99',
          '900': '#66137c',
          '950': '#410054',
        },
        'dark-blue':'#030F39'
      },
      fontFamily: {
        Outfit: ["'Rajdhani', sans-serif"],
        FontAwesome: ["'Font Awesome 6 Pro'"],
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
      },
      screens: {
        '3xl': '1900px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '60px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
