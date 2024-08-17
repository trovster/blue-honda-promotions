import { DateTime } from "luxon"
import _ from "@11ty/lodash-custom"

const limit = (arr, limit = 1) => (arr ?? []).slice(0, limit)

const upcoming = (arr) => {
    return (arr ?? []).filter((post) => DateTime.fromISO(post.data.date.toISOString()) >= DateTime.now())
}

const past = (arr) => {
    return (arr ?? []).filter((post) => DateTime.fromISO(post.data.date.toISOString()) < DateTime.now())
}

const exclude = (arr, url) => {
    return (arr ?? []).filter((post) => post.url !== url)
}

const pluck = (arr, value, attr = 'data.title') => {
    return (arr ?? []).filter((item) => _.get(item, attr) === value)
}

const next = (arr) => limit(upcoming(arr), 1).pop()

export { limit, upcoming, past, exclude, pluck, next }
