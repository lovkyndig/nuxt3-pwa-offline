import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  if (config.public.production_mode) {
    nuxtApp.vueApp.use(VueGtag, {
      config: {
        id: config.gtag_id as any
      }
    })
  }
})

/*
sources:
https://www.npmjs.com/package/vue-gtag
https://matteo-gabriele.gitbook.io/vue-gtag/
https://github.com/nuxt-community/google-analytics-module/issues/127
https://github.com/nuxt/nuxt/discussions/17143
https://stackoverflow.com/questions/71540309/how-to-connect-google-analytics-to-nuxt3-app
https://github.com/nuxt-community/gtm-module/issues/152
https://garywoodfine.com/how-to-add-google-analytics-to-nuxt-3/
*/
