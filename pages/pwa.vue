<script setup lang="ts">
const date = useAppConfig().buildDate
// source:
// https://github.com/vite-pwa/nuxt/blob/main/playground/layouts/default.vue
const { $pwa } = useNuxtApp()
</script>

<template>
  <div>
    <Head>
      <Title>Testing PWA</Title>
    </Head>
    <NuxtLayout name="base">
      <div class="privacy-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <div class="privacy-content-container">
          <h1>
            Testing PWA ...
          </h1>
          <p class="text-center">
            <span class="text-sm text-gray-400">Click the links or the icons to load the page.</span>
          </p>
          <div class="mx-auto p-8 flex flex-wrap justify-center items-center gap-16">
            <ClientOnly>
              <div
                v-if="$pwa?.offlineReady || $pwa?.needRefresh"
                class="pwa-toast"
                role="alert"
              >
                <div class="message">
                  <span v-if="$pwa.offlineReady">
                    App ready to work offline
                  </span>
                  <span v-else>
                    New content available, click on reload button to update.
                  </span>
                </div>
                <button
                  v-if="$pwa.needRefresh"
                  @click="$pwa.updateServiceWorker()"
                >
                  Reload
                </button>
                <button @click="$pwa.cancelPrompt()">
                  Close
                </button>
              </div>
              <div v-else>
                <p>Not offlineready</p>
              </div>
              <div
                v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
                class="pwa-toast"
                role="alert"
              >
                <div class="message">
                  <span>
                    Install PWA
                  </span>
                </div>
                <button @click="$pwa.install()">
                  Install
                </button>
                <button @click="$pwa.cancelInstall()">
                  Cancel
                </button>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.privacy-content-container {
  h1 {
    @apply py-8 text-3xl sm:text-5xl text-purple-500 font-bold text-center
  }

  h2 {
    @apply py-8 text-2xl font-bold text-center
  }
}
</style>
