import events from "./events.js"
import venues from "./venues.js"
import artists from "./artists.js"
import locations from "./locations.js"

const collections = {
    events,
    venues,
    artists,
    locations,
}

export default (config) => {
    for (const [name, collection] of Object.entries(collections)) {
        config.addCollection(name, (api) => collection(api, config));
    }
}
