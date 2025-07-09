/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',           // enable class‑based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // you can add custom colors, spacing, etc. here
    },
  },
  plugins: [
    // add any Tailwind plugins here, e.g. forms, typography, etc.
  ],
};
