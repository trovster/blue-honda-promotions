export default (collection) => {
    const items = {}

    // @todo locations should be from venues AND events…
    collection.getFilteredByTag("events").forEach((item) => {
        if (!item.data.location) return

        if (!items[item.data.location]) {
            items[item.data.location] = new Set()
        }

        items[item.data.location].add(item)
    })

    return items
}
