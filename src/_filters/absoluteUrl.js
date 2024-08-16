import { URL } from "url"

export default (url, base) => {
    try {
        return new URL(url.replace(/^\//, ""), base).toString()
    } catch (e) {
        return url
    }
}
