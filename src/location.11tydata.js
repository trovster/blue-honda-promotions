export default {
    eleventyComputed: {
        title: ({ location }) => `Events in ${location.data.title}`,
    },
    permalink: ({ location }) => location.page.url,
}
