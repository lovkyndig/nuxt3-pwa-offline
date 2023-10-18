// grepper use webnotification in typescript inside nuxt3 with whis file in plugins-folder
import { useWebNotification } from '@vueuse/core'
import type { UseWebNotificationOptions } from '@vueuse/core'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      webnoti: (msg: any) => {
        const options: UseWebNotificationOptions = {
          title: msg,
          dir: 'auto',
          lang: 'en',
          renotify: false,
          tag: 'Luther'
        }
        const {
          show
        } = useWebNotification(options)
        if (window) {
          if ('Notification' in window) {
            // console.log('WebNotification is popping up because you saved this ts-file in plugins and wrote this in a script-tag: useNuxtApp().$webnoti("Hello!")')
            show()
          } else {
            console.log('Notification is blocked or not supported.')
          }
        }
      }
    }
  }
})
// console.log('This message is written if you saved this ts-file in plugins and wrote this in a script tag: useNuxtApp().$webnoti("Hello!")')
// end grepper

/*
Source:
// source: https://vueuse.org/core/useWebNotification/#demo
// https://developer.mozilla.org/en-US/docs/Web/API/Notification
*/
