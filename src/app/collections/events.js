import api from "../../api/index.js"
import date from "../filters/date.js"
import slugify from "slugify"

export default async () => {
    const result = await api("/music/events?per_page=20")

    return result.data
        .map((event) => {
            return {
                data: {
                    ...event,
                    tags: [event.venue, event.location],
                },
                page: {
                    url: `/events/${date(event.date, "y-LL-dd")}:${slugify(event.title, {
                        remove: /[\.]+/,
                        decamelize: false,
                        lower: true,
                    })}/`,
                },
            }
        })
        .sort((a, b) => a.data.date.localeCompare(b.data.date))
}
