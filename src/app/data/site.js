// import pkg from "../../package.json" with { "type": "json" }
import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
const pkg = require("../../../package.json")

export default () => {
    return {
        title: pkg.description, // process.env.npm_package_config_title
        description: process.env.npm_package_config_description,
        keywords: pkg.keywords,
        url: process.env.URL,
    }
}
