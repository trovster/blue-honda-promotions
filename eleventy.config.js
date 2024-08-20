import "dotenv/config"
import collections from "./src/app/collections/index.js"
import shortcodes from "./src/app/shortcodes/index.js"
import filters from "./src/app/filters/index.js"
import plugins from "./src/app/plugins/index.js"
import functions from "./src/app/functions/index.js"

export default (config) => {
    // shortcodes…
    Object.entries(shortcodes).forEach((item) => {
        const [key, shortcode] = item
        config.addShortcode(key, shortcode)
    })

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

    // functions…
    Object.entries(functions).forEach((item) => {
        const [key, functionName] = item
        config.addNunjucksGlobal(key, functionName)
    })

    config.setDataDeepMerge(true)
    config.setQuietMode(true)
    config.setDataFileBaseName("index")

    config.addWatchTarget("./public/css")
    config.addWatchTarget("./public/js")
    config.setServerPassthroughCopyBehavior("passthrough")
    config.addPassthroughCopy({
        "public/fonts/": "/assets/fonts/",
        "public/js/": "/assets/js/",
        "node_modules/theme-change/index.js": "/assets/js/theme-change.js",
    });

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
