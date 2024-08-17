export default (collection) => {
    const items = {}

    collection.getAll()
        .filter(function (item) {
            return "location" in item.data;
        })
        .forEach((item) => {
            if (!item.data.location) return

            if (!items[item.data.location]) {
                items[item.data.location] = new Set()
            }

            items[item.data.location].add(item)
        })

    return items
}
