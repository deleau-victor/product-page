/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/*.tsx", "./components/**/*.tsx","./pages/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
