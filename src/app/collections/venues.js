import api from "../../api/index.js"
import slugify from "slugify"

export default async () => {
  const result = await api("/music/events/locations")

  return result.data
    .map((venue) => {
      return {
        data: {
          ...venue,
          tags: [
            venue.title,
            venue.city
          ],
        },
        page: {
          url: `/venues/${slugify(venue.title, {
            remove: /[\.]+/,
            decamelize: false,
            lower: true
          })}/`,
        }
      }
    })
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
}
