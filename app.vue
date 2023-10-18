<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { registerSW } from 'virtual:pwa-register'
import pkg from '~/package.json'
const appConfig = useAppConfig()
const config = useRuntimeConfig()
/**
 *
 * set head meta for all pages
 *
 */
useServerSeoMeta({
  ogTitle: config.site.title,
  ogType: 'website',
  ogUrl: pkg.homepage,
  ogImage: `${pkg.homepage}/seo-meta/1200x720.PNG`,
  ogImageAlt: pkg.name,
  twitterImage: `${pkg.homepage}/seo-meta/800x425.PNG`,
  twitterSite: '@nuxt_js',
  twitterCreator: '@nuxt_js',
  twitterCard: 'summary_large_image',
  themeColor: '#f9fafb'
  // googleSiteVerification: process.env.GSITE_VERIFICATION
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

// definePageMeta({ doctype: 'html' })

useHead({
  htmlAttrs: { lang: 'en' },
  noscript: [{ children: 'Turn on javascript to use this app!' }],
  style: ['body { overflow: overlay }'],
  link: [
    { rel: 'icon', href: appConfig?.site?.favicon },
    { rel: 'apple-touch-icon', href: appConfig?.site?.avatar },
    { rel: 'manifest', href: 'manifest.webmanifest', crossorigin: 'use-credentials' }
  ],
  meta: [{ name: 'id', content: `${pkg.version}` }]
})

if (appConfig.site.scrollSmooth) {
  useHead({
    style: [
      'html, body { scroll-behavior: smooth }'
    ]
  })
}

// const windowSize = useWindowSize()
onMounted(() => {
  // pwa - Content is sized correctly for the viewport
  const widthCheck = () => {
    if (window) {
      if (window.innerWidth > window.outerWidth) {
        window.innerWidth = window.outerWidth
        // windowSize.value.width = window.innerWidth
        // widthCheck.value = false
        return innerWidth
      }
    }
  }
  if (window) {
    window.addEventListener('load', () => { widthCheck() })
    window.addEventListener('resize', () => { widthCheck() })
  }
  // watch(() => windowSize.value.width, () => { widthCheck() })
  if (process.client) {
    /*
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    */
    // registerSW()
  }
})

/*
sources:
https://github.com/larbish/nuxt3-pwa/tree/main/public
https://github.com/alexdeploy/nuxt-pwa-template
https://github.com/alexdeploy/nuxt-pwa-template/tree/main/public
https://github.com/alexdeploy/nuxt-pwa-template/tree/main/public
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
*/
onUnmounted(() => { })

</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(156, 163, 175, 1);
  border: 3px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 1);
}
</style>
