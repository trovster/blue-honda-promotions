export default (collection) => {
    const items = new Set()

    collection.getAll()
        .map((item) => {
            return item.data.collections.events
        })
        .pop()
        .filter((item) => "bands" in item.data)
        .forEach((item) => {
        if (!item.data.bands) return

        item.data.bands.forEach((band) => {
            if (!items[band]) {
                items[band] = new Set()
            }

            items[band].add(item)
        })
    })

    return [...items].sort()
}
