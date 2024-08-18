import "dotenv/config"
import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import collections from "./src/app/collections/index.js"
import filters from "./src/app/filters/index.js"
import plugins from "./src/app/plugins/index.js"

export default (config) => {
    // plugins…
    config.addPlugin(EleventyHtmlBasePlugin)

    // shortcodes…
    config.addShortcode("year", () => new Date().getFullYear())

    // filters…
    Object.entries(filters).forEach((item) => {
        const [key, filter] = item
        config.addFilter(key, filter)
    })

    // collections…
    Object.entries(collections).forEach((item) => {
        const [key, collection] = item
        config.addCollection(key, (collectionsApi) => collection(collectionsApi, config))
    })

    // plugins…
    Object.entries(plugins).forEach((item) => {
        const [key, plugin] = item
        config.addPlugin(plugin)
    })

    config.addWatchTarget("./src/css")
    config.addWatchTarget("./src/js")
    config.setDataDeepMerge(true)
    config.setServerPassthroughCopyBehavior("passthrough")
    config.setQuietMode(true)
    config.setDataFileBaseName("index")

    return {
        dir: {
            input: "src",
            output: "dist",
            data: "app/data",
            collections: "app/collections",
            layouts: "app/layouts",
            includes: "app/includes",
        },
        templateFormats: ["html", "njk", "md", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
}
