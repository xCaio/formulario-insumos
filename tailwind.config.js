/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // para Next.js com pasta app
    "./pages/**/*.{js,ts,jsx,tsx}",     // caso tenha pages
    "./components/**/*.{js,ts,jsx,tsx}",// se usar components
  ],
  theme: {
    extend: {
      colors: {
        cabtecOrange: '#FF6F00',        // sua cor personalizada
      },
    },
  },
  plugins: [],
}
