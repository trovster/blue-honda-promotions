import 'dotenv/config'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import collections from './src/_collections/index.js'
import filters from './src/_filters/index.js'
import plugins from './src/_plugins/index.js'

export default config => {
  // plugins…
  config.addPlugin(EleventyHtmlBasePlugin)

  // shortcodes…
  config.addShortcode('year', () => new Date().getFullYear())

  // filters…
  Object.entries(filters).forEach(item => {
    const [key, filter] = item
    config.addFilter(key, filter)
  })

  // collections…
  Object.entries(collections).forEach(item => {
    const [key, collection] = item
    config.addCollection(key, collection)
  })

  // plugins…
  Object.entries(plugins).forEach(item => {
    const [key, plugin] = item
    config.addPlugin(plugin)
  })

  config.addWatchTarget('./src/css')
  config.addWatchTarget('./src/js')
  config.setDataDeepMerge(true)
  config.setServerPassthroughCopyBehavior('passthrough')
  config.setQuietMode(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: 'layouts'
    },
    templateFormats: ['html', 'njk', 'md', '11ty.js'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  }
}
