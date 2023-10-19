import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createResolver } from '@nuxt/kit'
import { isProduction } from 'std-env'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)

const currentDir = dirname(fileURLToPath(import.meta.url))
// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases

// grepper capitalize first letter in all words in a string, separeted with space ' ' or hyphen '-' (like name in package.json)
const capitalize = (string) => {
  const words = string.split(/[\s-]+/)
  for (const i in words) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
  }
  return words.join(' ')
}
// console.log('The pkg.name is now changed to: ' + capitalize(pkg.name))
// end grepper

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: { /* baseURL: '/' */ },
  css: [
    join(currentDir, './assets/style.css')
  ],
  modules: [
    [resolve('./modules/copy-files-module'), { cleanFolders: ['public/article'] }],
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-svgo'
  ],
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/sitemap.xml', '/']
    }
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['_id', '_type', 'series', 'tags']
    },
    highlight: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'one-dark-pro',
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md for the available program language
      preload: ['latex', 'markdown', 'md', 'tex']
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
      remarkPlugins: ['remark-math', 'remark-sub', 'remark-super'],
      rehypePlugins: {
        'rehype-katex': {
          // https://katex.org/docs/options.html#:~:text=output
          output: 'mathml' // the default value is `htmlAndMathml`
        }
      }
    },
    ignores: [/* ['images', 'attachment'] */]
  },
  typescript: {
    shim: false,
    typeCheck: true
  },
  runtimeConfig: {
    timestamp: {
      created: false,
      updated: false
    },
    site: { // renamed from rss
      title: capitalize(pkg.name),
      description: 'Guide to Create Google App in one day or one week, depending on the programming skills.',
      image: `${pkg.homepage}/avatar.svg`, // avatar also in appconfig
      favicon: `${pkg.homepage}/avatar.svg`, // favicon also in appconfig
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Kyrie Eleison`
    },
    public: {
      hostname: pkg.homepage,
      production_mode: isProduction
    }
  },
  components: [
    { path: './components/custom', pathPrefix: false },
    { path: './components/content', pathPrefix: false },
    { path: './components' }
    // https://nuxt.com/docs/guide/directory-structure/components
  ],
  experimental: {
    payloadExtraction: false // get the api-cache loads/working
  },
  pwa: {
    manifest: false, // public/manifest.webmanifest
    strategies: 'generateSW',
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    includeAssets: ['avatar.svg', 'privacy.txt'],
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html}'],
      // globIgnores: ['google*.html'],
      navigateFallbackDenylist: [/^\/api/],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => { return url.pathname.startsWith('/api') },
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'api-cache',
            cacheableResponse: { statuses: [0, 200] }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600 // 360 for testing only
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/]
    }
  }
})

/*
work-box-source:
https://github.com/vite-pwa/nuxt/issues/76
https://vite-pwa-org.netlify.app/workbox/generate-sw.html
Regex source:
https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/
https://regexone.com/
https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
https://stackoverflow.com/questions/16657152/matching-a-forward-slash-with-a-regex
*/
