import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,njk,md,js}"],
    theme: {
        extend: {},
        container: {
            padding: "1rem",
            center: true,
        },
    },
    plugins: [typography, daisyui],
    darkMode: ["class", '[data-theme="night"]'],
    daisyui: {
        themes: ["light", "dark", "cupcake", "cyberpunk", "dracula", "cmyk"],
        darkTheme: "night",
    },
}
