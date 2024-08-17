import { DateTime } from "luxon"

export default (date, format) => {
    return DateTime.fromISO(date).toFormat(format)
}
