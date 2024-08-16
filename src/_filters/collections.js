import { DateTime } from "luxon"

const limit = (arr, limit = 1) => arr.slice(0, limit)

const upcoming = (arr) => {
    return arr.filter((post) => DateTime.fromISO(post.data.date.toISOString()) >= DateTime.now())
}

const past = (arr) => {
    return arr.filter((post) => DateTime.fromISO(post.data.date.toISOString()) < DateTime.now())
}

const exclude = (arr, url) => {
    return arr.filter((post) => post.url !== url)
}

const next = (arr) => limit(upcoming(arr), 1).pop()

export { limit, upcoming, past, exclude, next }
