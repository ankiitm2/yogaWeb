/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "yoga-primary": "#4a6b57",
        "yoga-secondary": "#3a5a47",
      },
    },
  },
  plugins: [],
};
