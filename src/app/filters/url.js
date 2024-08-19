import { URL } from "url"

/**
 * Shorten a URL
 * Returns a URL without the protocol or www. prefix.
 *
 * @param {String} url - the URL to shorten
 * @returns {String} - the shortened URL
 */
const shorten = (url) => {
    url = new URL(url)

    return url.host.replace(/^www\./, "") + (url.pathname !== "/" ? url.pathname : "")
}

export { shorten }
