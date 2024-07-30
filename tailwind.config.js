/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ['"Unbounded"'],
        Montserrat: ['"Montserrat"'],
      },
      screens: {
        "lg-plus": "992px",
      },
      colors: {
        "color-white": "#FFFFFF",
        "color-dark-green": "#16292C",
        "light-gray": "#3D3D3D",
        "light-gray-light": "#3D3D3DCC",
        "color-line": "#0000004D",
        "color-light-line": "#FEFCF63D",
        "color-text": "#FFFFFFB2",
        gray: "#3D3D3D",
      },
      lineHeight: {
        6.5: "26px",
      },
      letterSpacing: {
        wide: "2px",
      },
      padding: {
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
