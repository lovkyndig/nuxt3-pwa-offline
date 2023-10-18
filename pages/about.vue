<script setup lang="ts">
const appConfig = useAppConfig()
/*
onMounted(() => {
  // @ts-ignore
  useNuxtApp().$webnoti(appConfig.myLayer.notification.about)
})
*/
useSeoMeta({
  titleTemplate: appConfig.myLayer.seoMeta.about.title,
  description: appConfig.myLayer.seoMeta.about.description,
  ogDescription: appConfig.myLayer.seoMeta.about.description
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

</script>

<template>
  <div>
    <Head>
      <Title>About</Title>
    </Head>
    <NuxtLayout name="base">
      <ContentDoc class="about-me-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <template #not-found>
          <div class="about-me-content-container">
            <h1 style="display: none">
              {{ appConfig.myLayer.seoMeta.about.title }}
            </h1>
            <img src="/svg/text-logo.svg" alt="About text-logo" class="svg logo">
            <img src="/svg/about-not-found.svg" alt="About-md-file not-found" class="svg content">
            <p class="max-w-prose mx-auto p-4">
              Go to the <b>
                <a
                  href="https://create-google-app.vercel.app"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 underline font-bold transition-colors duration-300"
                >
                  Documentation
                </a> </b>
              to read the guidelines, about how to set up the project.
            </p>
          </div>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.about-me-content-container {
  h1, h2, h3, h4, h5, h6 {
    @apply py-8 sm:py-10 font-bold text-center;
  }

  p {
    @apply py-4 text-lg
  }
}

</style>

<style scoped>
.svg {
  display: block;
  margin-right: auto;
  width: 75%;
}

.content {
  margin-left: 5%;
}
.logo {
  margin-left: 10%;
}
</style>
