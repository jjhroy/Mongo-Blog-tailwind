/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/views/**/*.vue', './src/components/**/*.vue', './src/layouts/**/*.vue'],
  theme: {
    extend: {
      keyframes: {

      }
    },
    // colors: {
    //   light: {
    //     "theme-color": "#333",
    //     "theme-background": "#f3f6f7",
    //     "theme-card-color": "#fff",
    //     "theme-footer-left": "#03a9f4",
    //     "theme-footer-right": "#23a6d5",
    //   },
    //   dark: {
    //     "theme-color": "#eee",
    //     "theme-background": "#333",
    //     "theme-card-color": "#000",
    //     "theme-footer-left": "#333",
    //     "theme-footer-right": "#000",
    //   }
    // }
  },
  plugins: [],
}
