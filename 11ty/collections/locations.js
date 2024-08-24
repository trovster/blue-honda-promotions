export default async (collection, config) => {
    const events = await config.collections.events()
    const slugify = config.getFilter("slugify")
    const items = new Set()
    const locations = new Set()

    events
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
                    url: `/locations/${slugify(item.data.location)}/`,
                },
            })
        })

    return [...items].sort((a, b) => a.data.title.localeCompare(b.data.title))
}
