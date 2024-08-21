import collections from "./collections.js"
import dates from "./dates.js"
import urls from "./urls.js"

const filters = {
    ...collections,
    ...dates,
    ...urls,
}

export default (config) => {
    for (const [name, filter] of Object.entries(filters)) {
        config.addFilter(name, filter)
    }
}
