module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      spacing: {
        '5p': '5%',
      },
      colors: {
        //can customize code and put comments here so you can go back and see how you did it - esp helpful if coming from the tailwind shades site - ie:
        //https://www.tailwindshades.com/#color=330.3658536585366%2C81.1881188118812%2C60.392156862745104&step-up=8&step-down=11&hue-shift=100&name=french-rose&base-stop=9&overrides=e30%3D 
        lightblue: {
          100: '#C4DBE2',
        },
        brown: {
          50: '#fdf8f6',
        },
      },
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      nunito: ['Nunito Sans'],
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
