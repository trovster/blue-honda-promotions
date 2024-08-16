export default (collection) => {
    const items = new Set()

    collection.getFilteredByTag("events").forEach((item) => {
        if (!item.data.location) return

        items.add(item.data.location)
    })

    return [...items].sort()
}
