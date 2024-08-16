export default {
    layout: "event.njk",
    tags: ["events"],
    permalink: function ({ title, date, safe }) {
        return `/events/${this.date(date, "yyyy-LL-dd")}/${safe ?? this.slugify(title)}/`
    },
}
