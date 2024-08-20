import "dotenv/config"
import collections from "./src/collections/index.js"
import shortcodes from "./11ty/shortcodes/index.js"
import filters from "./11ty/filters/index.js"
import plugins from "./11ty/plugins/index.js"
import functions from "./11ty/functions/index.js"

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
    config.setServerPassthroughCopyBehavior("passthrough")

    config.addLayoutAlias("default", "layouts/default.njk");
    config.addWatchTarget("./public/css")
    config.addWatchTarget("./public/js")
    config.addPassthroughCopy({
        "public/fonts/": "/assets/fonts/",
        "public/js/": "/assets/js/",
        "node_modules/theme-change/index.js": "/assets/js/theme-change.js",
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            data: "data",
            collections: "collections",
            layouts: "layouts",
            includes: "includes",
        },
        templateFormats: ["html", "njk", "md", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
}
