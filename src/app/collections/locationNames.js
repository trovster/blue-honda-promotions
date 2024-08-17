import slugify from "slugify"

export default (collection) => {
    const items = new Set()
    const locations = new Set()

    collection
        .getAll()
        .map((item) => {
            return item.data.collections.events
        })
        .pop()
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
                        remove: /[\.]+/,
                        decamelize: false,
                        lower: true,
                    })}/`,
                },
            })
        })

    return [...items].sort((a, b) => a.data.title.localeCompare(b.data.title))
}
