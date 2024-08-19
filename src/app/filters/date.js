import { DateTime } from "luxon"

// @see https://github.com/moment/luxon/issues/118
// @uses 'S' from php.net/date
function ordinal(n) {
    var s = ["th", "st", "nd", "rd"]
    var v = n % 100
    return "'" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "'"
}

/**
 * Format a date with Luxon.
 * If you provide ddS in the format, it assumes you want the ordinal suffix.
 *
 * @param {String} date - string Date
 * @param {String} format - date format (Luxon)
 * @param {String} locale - locale
 * @returns {String} formatted date
 */
export default (date, format, locale = "en") => {
    date = DateTime.fromISO(date).setLocale(locale)
    return date.toFormat(format.replace('ddS', ordinal(date.day)))
}
