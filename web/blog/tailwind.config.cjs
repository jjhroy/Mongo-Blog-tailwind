/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/views/**/*.vue', './src/components/**/*.vue', './src/layouts/**/*.vue'],
  theme: {
    extend: {
      keyframes: {

      }
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      around: '0 0 10px rgb(0 0 0 / 15%)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }
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
