import fetch from "@11ty/eleventy-fetch"

export default async (path, options = {}) => {
    const base = (path) => {
        const base = process.env.API_BASE || "https://api.trovster.com/"
        return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`
    }

    const url = base(path)
    const headers = {
        Authorization: `Bearer ${process.env.API_KEY}`,
    }

    return fetch(url, {
        duration: 0,
        type: "json",
        fetchOptions: {
            headers,
        },
        ...options,
    })
}
