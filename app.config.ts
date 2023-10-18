export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer',
    menuBtn1: 'Content',
    notification: {
      // frontpage: 'How to create an google app in one week?',
      frontpage: 'This app is under heavy development! It is working fine, but there is added futures all the time.',
      about: 'Do you love this app? Please wait some weeks before you download it from github.com/lovkyndig'
    },
    seoMeta: {
      home: {
        title: 'Nuxt3 PWA Offline',
        description: 'Checking if nuxt3 is working offline with nuxt-content.'
      },
      about: {
        title: 'About Nuxt3 PWA Offline',
        description: 'This is only a copy of one of my other repos for checking offline use of my pwa.'
      },
      list: {
        title: 'List of nuxt-content in this app',
        description: 'This is the list of content in the "Nuxt3 PWA Offline" - with responsive design for mobile and laptop. '
      }
    }
  },
  meta: {
    url: 'https://nuxt3-pwa-offline.vercel.app/'
  },
  site: {
    author: 'Kyrie Eleison',
    email: 'jur.eleison@gmail.com',
    avatar: '/avatar.svg',
    favicon: '/avatar.svg', // favicon.ico
    scrollSmooth: true
  },
  homePage: {
    showBlogPosts: true,
    postItemLimit: 20
  },
  privacyPage: true,
  articlePage: {
    showTime: true,
    outdated: {
      show: true,
      threshold: 30
    },
    showCatalog: false,
  },
  search: {
    exclude: [
      '/',
      '/about/',
      '/privacy/',
      '/list/'
    ]
  },
  assetTypes: []
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
