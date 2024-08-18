import api from "../../api/index.js"

export default async (collection, config) => {
    const result = await api("/music/events?per_page=20")
    const slugify = config.getFilter("slugify")
    const date = config.getFilter("date")

    return result.data
        .map((event) => {
            return {
                data: {
                    ...event,
                    tags: [event.venue, event.location],
                },
                page: {
                    url: `/events/${date(event.date, "y-LL-dd")}:${event.safe ?? slugify(event.title)}/`,
                },
            }
        })
        .sort((a, b) => a.data.date.localeCompare(b.data.date))
}
