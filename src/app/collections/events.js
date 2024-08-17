import api from "../../api/index.js"
import slugify from "slugify"

export default async () => {
  const result = await api("/music/events")

  return result.data
    .map((event) => {
      return {
        data: {
          ...event,
          tags: [
            event.venue,
            event.location
          ],
        },
        url: `/events/${slugify(event.title, {
          lower: true
        })}/`,
      }
    })
    .sort((a, b) => a.data.date.localeCompare(b.data.date))
}
