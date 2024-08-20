import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import EleventyNavigationPlugin from "@11ty/eleventy-navigation"

const plugins = {
    EleventyHtmlBasePlugin,
    EleventyNavigationPlugin,
}

export default (config) => {
    Object.entries(plugins).forEach((item) => {
        const [key, plugin] = item
        config.addPlugin(plugin)
    })
}
