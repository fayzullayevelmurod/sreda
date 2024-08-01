/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ['"Unbounded"'],
        Montserrat: ['"Montserrat"'],
      },
      colors: {
        "color-white": "#FFFFFF",
        "color-dark-green": "#16292C",
        "color-green-black": "#5E6C5B",
        "light-gray": "#3D3D3D",
        "light-gray-light": "#3D3D3DCC",
        "color-line": "#0000004D",
        "color-light-line": "#FEFCF63D",
        "color-text": "#FFFFFFB2",
        "grey-bg": '#F4F5F5'
      },
    },
  },
  plugins: [],
};
