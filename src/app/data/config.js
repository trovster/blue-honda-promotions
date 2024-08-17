const config = {}

export default () => {
    if (process.env.ELEVENTY_BASE_URL) {
        config.baseUrl = process.env.ELEVENTY_BASE_URL
    }

    if (process.env.GITHUB_REPOSITORY_OWNER) {
        config.baseUrl = `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    }

    // https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
    if (process.env.URL) {
        config.baseUrl = process.env.URL
    }

    // https://vercel.com/docs/v2/build-step#system-environment-variables
    if (process.env.VERCEL_URL) {
        config.baseUrl = process.env.VERCEL_URL
    }

    // https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables
    if (process.env.GITHUB_URL) {
        config.baseUrl = process.env.GITHUB_URL
    }

    return config
}
