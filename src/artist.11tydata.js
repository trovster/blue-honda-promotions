export default {
    eleventyComputed: {
        title: ({ artist }) => artist.data.title,
    },
    permalink: ({ artist }) => artist.page.url,
}
