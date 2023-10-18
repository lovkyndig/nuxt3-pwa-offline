<script lang="ts" setup>
const props = defineProps<{
  name?: string
}>()

console.log('Testing in template: ' + props.name)
</script>

<template>
  <span><!----></span>
</template>
