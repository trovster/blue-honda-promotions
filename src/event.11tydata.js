export default {
    eleventyComputed: {
        title: ({ event }) => event.data.title
    },
    permalink: ({ event }) => event.page.url
}
