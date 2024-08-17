export default (collection) => {
    const items = new Set()

    collection.getAll()
        .filter(function (item) {
            return "location" in item.data;
        })
        .forEach((item) => {
            if (!item.data.location) return

            items.add(item.data.location)
        })

    return [...items].sort()
}
