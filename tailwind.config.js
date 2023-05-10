const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["poppins", "sans-serif", defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
