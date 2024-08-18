import api from "../../api/index.js"

export default async (collection, config) => {
    const result = await api("/music/events/locations")
    const slugify = config.getFilter("slugify")

    return result.data
        .map((venue) => {
            return {
                data: {
                    ...venue,
                    tags: [venue.title, venue.city],
                },
                page: {
                    url: `/venues/${slugify(venue.title)}/`,
                },
            }
        })
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
}
