<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="dark:bg-black dark:text-white w-screen h-screen">
    <div class="flex flex-col justify-center pt-12 max-w-xl mx-auto">
      <div class="w-full flex justify-between items-center">
        <nuxt-link v-show="route.path === '/'" class="uppercase text-xl" to="https://codecember.netlify.app/" target="_blank">
          codecember
        </nuxt-link>
        <div class="flex justify-center gap-4 opacity-50">
          <nuxt-link v-show="route.path !== '/'" to="/">
            <Icon class="text-xl " name="lucide:chevron-left" />
          </nuxt-link>
        </div>
        <div class="flex flex-row justify-center gap-6">
          <toggle-theme />
          <!-- <nuxt-link to="https://atlaxt.me" target="_blank" class="opacity-70 uppercase">
            <img v-show="isDark" src="https://atlaxt.me/sign_white.png" alt="Atlaxt" class="w-6 h-6">
            <img v-show="!isDark" src="https://atlaxt.me/sign_black.png" alt="Atlaxt" class="w-6 h-6">
          </nuxt-link> -->
        </div>
      </div>
      <div class="pt-32 w-full flex justify-center">
        <slot />
      </div>
    </div>
    <note :key="route.fullPath" />
  </div>
</template>
