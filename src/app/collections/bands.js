export default (collection) => {
    const items = {}

    // @todo locations should be from events…
    collection.getFilteredByTag("events").forEach((item) => {
        if (!item.data.bands) return

        item.data.bands.forEach((band) => {
            if (!items[band]) {
                items[band] = new Set()
            }

            items[band].add(item)
        })
    })

    return items
}
