import { DateTime } from "luxon"
import _ from "@11ty/lodash-custom"

/**
 * Limit items, based on a passed limit.
 *
 * @param {Array} arr - items to filter
 * @param {Integer} limit - count to limit
 * @returns {Array} filtered items
 */
const limit = (arr, limit = 1) => (arr ?? []).slice(0, limit)

/**
 * Upcoming items, based on post.data.date.
 *
 * @param {Array} arr - items to filter
 * @returns {Array} filtered items
 */
const upcoming = (arr) => {
    return (arr ?? []).filter((post) => DateTime.fromISO(post.data.date) >= DateTime.now())
}

/**
 * Past items, based on post.data.date.
 *
 * @param {Array} arr - items to filter
 * @returns {Array} filtered items
 */
const past = (arr) => {
    return (arr ?? []).filter((post) => DateTime.fromISO(post.data.date) < DateTime.now())
}

/**
 * Exclude items from an array, based on the URL.
 *
 * @param {Array} arr - items to filter
 * @param {String} url - url to compare.
 * @returns {Array} filtered items
 */
const exclude = (arr, url) => {
    return (arr ?? []).filter((post) => post.page.url !== url)
}

/**
 * Pluck an item from a collection, based on attribute.
 *
 * @param {Array} arr - items to filter
 * @param {String} value - value to compare.
 * @param {String} attr - item attribute to compare against.
 * @returns {Array} filtered items
 */
const pluck = (arr, value, attr = 'data.title') => {
    return (arr ?? []).filter((item) => _.get(item, attr) === value)
}

/**
 * Find the next item, using the post.data.date.
 *
 * @param {Array} arr - items to filter
 * @returns {Mixed} next item
 */
const next = (arr) => limit(upcoming(arr), 1).pop()

export { limit, upcoming, past, exclude, pluck, next }
