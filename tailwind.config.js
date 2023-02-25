/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0078E8',
        'secondary': '#93C9FE',
        'textColor': '#333333',
        'negative': '#ffffff',
      },
    },
  },
  plugins: [],
};
