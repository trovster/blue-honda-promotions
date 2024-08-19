import { DateTime } from "luxon"

/**
 * Check whether a date is in the past.
 *
 * @param {String} date - string Date
 * @returns {Boolean}
 */
const isPast = (date) => {
    return DateTime.fromISO(date) <= DateTime.now()
}

/**
 * Check whether a date is in the future.
 *
 * @param {String} date - string Date
 * @returns {Boolean}
 */
const isFuture = (date) => {
    return DateTime.fromISO(date) >= DateTime.now()
}

export { isPast, isFuture }
