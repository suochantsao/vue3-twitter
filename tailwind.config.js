module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        130: "130px",
        150: "150px",
        720: "720px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
