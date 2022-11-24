module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    extend: {
      spacing: {
        '5p': '5%',
      },
    },
  },
  plugins: [],
}
