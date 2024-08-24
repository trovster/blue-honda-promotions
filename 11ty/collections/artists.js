export default async (collection, config) => {
    const events = await config.collections.events()
    const slugify = config.getFilter("slugify")
    const items = new Set()
    const artists = new Set()

    events
        .filter((item) => "artists" in item.data)
        .forEach((item) => {
            if (!item.data.artists) return

            item.data.artists.forEach((artist) => {
                if (artists[artist]) return

                if (!artists[artist]) {
                    artists[artist] = true
                }

                items.add({
                    data: {
                        title: artist,
                    },
                    page: {
                        url: `/artists/${slugify(artist)}/`,
                    },
                })
            })
        })

    return [...items].sort((a, b) => a.data.title.localeCompare(b.data.title))
}
