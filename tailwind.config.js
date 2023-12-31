// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
    ".src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
