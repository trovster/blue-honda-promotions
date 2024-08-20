import collections from "./collections.js"
import dates from "./dates.js"
import urls from "./urls.js"

const filters = {
    ...collections,
    ...dates,
    ...urls,
}

export default (config) => {
    Object.entries(filters).forEach((item) => {
        const [key, filter] = item
        config.addFilter(key, filter)
    })
}
