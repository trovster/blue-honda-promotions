import "dotenv/config"

import collections from "./11ty/collections/index.js"
import filters from "./11ty/filters/index.js"
import functions from "./11ty/functions/index.js"
import plugins from "./11ty/plugins/index.js"
import shortcodes from "./11ty/shortcodes/index.js"

export default (config) => {
    config.addPlugin(collections)
    config.addPlugin(filters)
    config.addPlugin(functions)
    config.addPlugin(plugins)
    config.addPlugin(shortcodes)

    config.setDataDeepMerge(true)
    config.setQuietMode(true)
    config.setDataFileBaseName("index")
    config.setServerPassthroughCopyBehavior("passthrough")

    config.addLayoutAlias("default", "layouts/default.webc")
    config.addWatchTarget("./public/css")
    config.addWatchTarget("./public/js")
    config.addPassthroughCopy({
        "public/fonts/": "/assets/fonts/",
        "public/js/": "/assets/js/",
        "node_modules/theme-change/index.js": "/assets/js/theme-change.js",
    })

    return {
        dir: {
            input: "src",
            output: "dist",
            data: "data",
            layouts: "layouts",
            includes: "includes",
        },
        markdownTemplateEngine: "webc",
        htmlTemplateEngine: "webc",
    }
}
