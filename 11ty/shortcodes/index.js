import year from "./year.js"

const shortcodes = {
    year,
}

export default (config) => {
    Object.entries(shortcodes).forEach((item) => {
        const [key, shortcode] = item
        config.addShortcode(key, shortcode)
    })
}
