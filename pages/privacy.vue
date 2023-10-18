<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <Head>
      <Title>Privacy Policy</Title>
    </Head>
    <NuxtLayout name="base">
      <div class="privacy-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <div class="privacy-content-container">
          <h1>
            Privacy Police etc.
          </h1>
          <p class="text-center">
            <span class="text-sm text-gray-400">Click the links or the icons to load the page.</span>
          </p>
          <div class="mx-auto p-8 flex flex-wrap justify-center items-center gap-16">
            <div class="flex flex-col items-center gap-2">
              <a
                :href="`./privacy.txt`"
                target="_blank"
                aria-label="privacy.txt"
                class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              > <!-- icon="iconoir:privacy-policy" class="w-36 h-36" -->
                <SvgoIconoirPrivacyPolicy class="text-green-400 text-9xl" />
                <br>
                <span class="flex flex-col items-center">Privacy Policy</span>
              </a>
            </div>

            <div class="flex flex-col items-center gap-2">
              <a
                :href="`./sitemap.xml`"
                target="_blank"
                aria-label="sitemap.xml"
                class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              > <!-- icon="majesticons:sitemap" class="w-36 h-36" -->
                <SvgoMajesticonsSitemap class="text-purple-400 text-9xl" />
                <br>
                <span class="flex flex-col items-center">Sitemap</span>
              </a>
            </div>

            <div class="flex flex-col items-center gap-2">
              <a
                :href="`./rss.xml`"
                target="_blank"
                aria-label="rss.xml"
                class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              > <!-- icon="fa-solid:rss-square" class="w-36 h-36" -->
                <SvgoFaSolidRssSquare class="text-orange-400 h-1/2 text-9xl" />
                <br>
                <span class="flex flex-col items-center">Rss</span>
              </a>
            </div>
            <div>
              <NuxtLink to="/pwa">
                PWA Testing
              </NuxtLink>
            </div>
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
