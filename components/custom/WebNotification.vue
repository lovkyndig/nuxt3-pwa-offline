<script setup lang="ts">
/*
import { useWebNotification } from '@vueuse/core'
import type { UseWebNotificationOptions } from '@vueuse/core'

const props = defineProps<{
  title: string
}>()

const options: UseWebNotificationOptions = {
  title: props.title,
  dir: 'auto',
  lang: 'en',
  renotify: false,
  tag: 'Luther'
}

const {
  show
} = useWebNotification(options)

onMounted(() => {
  if (window) {
    if ('Notification' in window) {
      // API supported
      show()
    } else {
      console.log('Notification is blocked or not supported.')
    }
  }
})
*/

/*
Source:
// source: https://vueuse.org/core/useWebNotification/#demo
// https://developer.mozilla.org/en-US/docs/Web/API/Notification
*/

/*
Use-description:
<CustomWebNotification title="This msg popping up from the left on desktop." />
*/
</script>

<template>
</template>