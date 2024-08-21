import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import EleventyNavigationPlugin from "@11ty/eleventy-navigation"

const plugins = {
    EleventyHtmlBasePlugin,
    EleventyNavigationPlugin,
}

export default (config) => {
    for (const [name, plugin] of Object.entries(plugins)) {
        config.addPlugin(plugin)
    }
}
