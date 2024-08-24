export default {
    eleventyComputed: {
        title: ({ venue }) => `Events at ${venue.data.title}`,
    },
    permalink: ({ venue }) => venue.page.url,
}
