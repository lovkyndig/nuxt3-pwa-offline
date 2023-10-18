// https://nuxt.com/docs/guide/directory-structure/plugins
// https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
      log: (msg: any) => {
        console.log(`Log: ${msg}!`)
      }
    }
  }
})

/*
hello (and other provide-objects) can be used in templates like this:
const { $hello } = useNuxtApp()
<template>
  <div>
    {{ $hello('world') }}
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use provided helpers inside script
const { $log } = useNuxtApp()
$log('Webnotification from script.')
</script>
*/

/*
Examples of other helpers I haved used in other apps:

// const config = useRuntimeConfig()
// const gtag_id = config.public.gtag // "G-" added
// const gtm_id = config.public.gtm // "GTM-" added
// const cookieOptional = useCookieOptional()
// providing constants for use in app.vue useHead({})
gtag_src: `https://www.googletagmanager.com/gtag/js?id=${gtag_id}`, // "&l=dataLayer" added
gtag_script: () => `window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments) };
gtag('js', new Date()); 
gtag('config', '${gtag_id}' );
gtag('page', { // added by Eleison
  path: document.location.pathname, 
  title: document.title
} );`,
// The following two functions is taken out of use 13.juni 2023
// don't want to use cookies
gtm_script: () => `(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 
    event : 'gtm.js',
    'gtm.start' : new Date().getTime(), 
    'page' : { // added by Eleison
      path: document.location.pathname, 
      title: document.title
    }
  });
  var f = d.getElementsByTagName(s)[0], 
      j = d.createElement(s), 
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', '${gtm_id}')`,
gtm_iframe: () => `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtm_id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
moveGtmNoscript: () => {
  const nuxt = document.querySelector('#__nuxt')
  const noscript = document.querySelector('#gtm_noscript') // with iframe
  document.body.insertBefore(noscript, nuxt)
  console.log('Moved gtm_noscript, as 1.child to body.')
},
*/

/**
  * 
  * If there is users with Javascript disabled, an iframe have to be Inserted after body-tag.
  * This code snippet can be used to "Ownership Verification" from Settings in (GCS), 
  * Google Search Console, "Additional verification methods"; "Google Tag Manager".
  * 
  * NB! Verification will fail since this noscript-content isn't the first child of body 
  * (on the serverside).
  * There isn't a way (I know about) to fix this on the serverside, with nuxt or vue.
  * 
  */

/* Backup of other helpers I have used on my way. */
/*
toggleScript: () => {
  const searchString = useState('searchString')
  if (searchString.value === '') {
    if (document) {
      const timer = setTimeout(() => {
        const toggleBtn = document.querySelector('div > button.catalog-btn') // #toggleAllHeading
        toggleBtn.dispatchEvent(new Event('click')) // Fire event
        console.log('Finish toggleScript! The id of toggleBtn is: ' + toggleBtn.id)
        clearTimeout(timer)
      }, 800)
    }
  }
},
logToggleContent: () => {
  const timer = setTimeout(() => {
    console.log('Start logToggleContent')
    const detailEl = document.querySelectorAll('details')
    detailEl.forEach((element, index) => { 
      if (element.hasAttribute('open')) {
        console.log('The attribute with index ' + index + ' is open')
        // element.dispatchEvent(new Event('click')) // Fire event
      }
    })
    clearTimeout(timer)
  }, 800)
},
*/