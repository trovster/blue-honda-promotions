import events from "./events.js"
import venues from "./venues.js"
import bands from "./bands.js"
import locations from "./locations.js"
import locationNames from "./locationNames.js"

const collections = {
    events,
    venues,
    bands,
    locations,
    locationNames,
}

export default (config) => {
    Object.entries(collections).forEach((item) => {
        const [key, collection] = item
        config.addCollection(key, (collectionsApi) => collection(collectionsApi, config))
    })
}
