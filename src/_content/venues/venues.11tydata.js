export default {
    layout: "venue.njk",
    tags: ["venues"],
    permalink: function ({ title, safe }) {
        return `/venues/${safe || this.slugify(title)}/`
    },
}
