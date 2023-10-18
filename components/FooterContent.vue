<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-gray-400 text-center">
      <p v-if="appConfig.site.author">
        Copyright &copy {{ (new Date()).getFullYear() }}

        <a
          v-if="appConfig.site.email"
          :href="`mailto:${appConfig.site.email}`"
          class="text-blue-400"
        >{{
          appConfig.site.author }}</a>
        <span v-else>{{ appConfig.site.author }}</span>
      </p>
      <p>
        Template <a
          href="https://github.com/lovkyndig/create-google-app"
          target="_blank"
          class="text-blue-400"
        >Create Google App</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
