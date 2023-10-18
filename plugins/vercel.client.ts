import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((/*nuxtApp*/) => {
  // nuxtApp.provide('inject', () => inject() ) 
  // This method not working, using return instead.

  return {
    provide: {
      inject: inject()
    }
  }
})

/*
source:
https://vercel.com/docs/concepts/analytics/quickstart
https://vercel.com/blog/nuxt-analytics-on-vercel //
https://nuxt.com/docs/migration/plugins-and-middleware
https://vercel.com/lovkyndig/eleison/analytics // login for this

Problem:
https://github.com/vercel/analytics/issues/84
*/