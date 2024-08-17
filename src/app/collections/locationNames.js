
import slugify from "slugify"

export default (collection) => {
    const items = new Set()
    const locations = new Set()

    collection.getAll()
        .filter((item) => "location" in item.data)
        .forEach((item) => {
            if (!item.data.location || locations[item.data.location]) return

            if (!items[item.data.location]) {
                locations[item.data.location] = new Set()
            }

            items.add({
                data: {
                    title: item.data.location,
                },
                page: {
                    url: `/locations/${slugify(item.data.location, {
                        lower: true
                    })}/`,
                }
            })
        })

    return [...items].sort()
}
