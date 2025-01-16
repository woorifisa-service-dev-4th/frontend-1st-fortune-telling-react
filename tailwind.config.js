/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom, #d4c5e6, rgba(247, 224, 213, 0.7), rgba(247, 224, 213, 0))',
    },},
  },
  plugins: [],
}