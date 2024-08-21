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
    for (const [name, collection] of Object.entries(collections)) {
        config.addCollection(name, (api) => collection(api, config));
    }
}
