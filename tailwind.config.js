/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "meow-script": ["Meow Script", "cursive"],
        merriweather: ["Merriweather", "serif"],
        allura: ["Allura", "cursive"],
        felipa: ["Felipa", "serif"],
        cookie: ["Cookie", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        "dancing-script": ["Dancing Script", "cursive"],
        "lato-thin": ["Lato", "sans-serif"],
        "great-vibes": ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
