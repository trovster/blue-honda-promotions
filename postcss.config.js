import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcssImport from "postcss-import"

export default {
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
}
