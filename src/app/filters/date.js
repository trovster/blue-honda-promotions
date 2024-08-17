import { DateTime } from "luxon"

/**
 * Format a date with Luxon.
 *
 * @param {String} date - string Date
 * @param {String} format - date format (Luxon)
 * @param {String} locale - locale
 * @returns {String} formatted date
 */
export default (date, format, locale = "en") => {
    return DateTime.fromISO(date).setLocale(locale).toFormat(format)
}
