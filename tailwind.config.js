import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,njk,md,js}"
  ],
  theme: {
    extend: {},
    container: {
      padding: '1rem',
      center: true,
    },
  },
  plugins: [
    typography,
    daisyui,
  ],
  darkMode: ['class', '[data-theme="night"]'],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    darkTheme: "night",
  },
}
