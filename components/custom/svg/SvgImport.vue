<template>
  <!-- 
    THIS COMPONENT CAN ONLY BE USED IN THIS TEMPLATE IN ONE CONDITIONS;
    THE ICONS HAVE TO BE SAVED IN USERS FOLDER: ASSETS/ICONS 
    ***
    There is a problem with using this component on .playground (13.10.2023)
  -->
  <span
    v-if="icon"
    class="inline-block"
    :class="props.iconClass"
    v-html="icon" 
  /> 
  <span v-else>{{ name }}</span>
</template>

<script setup lang="ts">
/*
Hight and width can't be set with h-9 w-9. Use font size text-xl
Source: https://tailwindcss.com/docs/font-size
Import svg-icons from iconify:
https://icon-sets.iconify.design/
*/
const props = defineProps<{
  name?: string; // originalt only: name: string
  iconClass?: string
}>()

// Auto-load icons
const icons = Object.fromEntries(
  Object.entries(import.meta.glob('./assets/icons/**/*.svg', { as: 'raw' })).map(
  // Object.entries(import.meta.glob(dirPlusFiles, { as: 'raw' })).map(
    ([key, value]) => {
      const filename = key.split('/').pop()!.split('.').shift()
      return [filename, value]
    },
  ),
)

// Lazily load the icon
const icon = props.name && (await icons?.[props.name]?.())
/*
source:
https://github.com/nuxt-community/svg-module/issues/86

Notes:
Some of this  code is from
https://github.com/Benbinbin/BlogiNote/blob/main/components/content/IconCustom.vue

nuxt-svgo-sources:
https://nuxt.com/modules/nuxt-svgo
https://github.com/cpsoinos/nuxt-svgo
*/
</script>