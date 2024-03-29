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
      padding: '5%',
    },
    extend: {
      spacing: {
        '5p': '5%',
      },
      colors: {
        //can customize code and put comments here so you can go back and see how you did it - esp helpful if coming from the tailwind shades site - ie:
        //https://www.tailwindshades.com/#color=330.3658536585366%2C81.1881188118812%2C60.392156862745104&step-up=8&step-down=11&hue-shift=100&name=french-rose&base-stop=9&overrides=e30%3D 
        trueGray: {
          100: '#808080',
          900: '#101010',
        },
        redPop: {
          100: '#960000',
        },
        lightblue: {
          100: '#C4DBE2',
        },
        brown: {
          50: '#fdf8f6',
        },
      },
      borderWidth: {
        '16': '16px',
      },
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
      sans: ['Figtree', 'sans-serif'],
      lora: ['Lora', 'serif'],
    },
  },
  plugins: [],
}
