/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d7a44d',  // MAIN — the "Choose a topic" button color
          hover:   '#dea542',  // hover state
          border:  '#b28840',  // deeper shade of MAIN, for borders on dark surfaces
          light:   '#e7b153',  // lighter shade of MAIN — light accents only
        },
        card: {
          DEFAULT: '#171717',  // card background  (neutral-900) → bg-card
          border:  '#262626',  // card border      (neutral-800) → border-card-border
        },
      },
    },
  },
  plugins: [],
}