<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="dark:bg-black dark:text-white w-screen h-screen">
    <div class="flex flex-col justify-center pt-12 max-w-xl mx-auto">
      <div class="w-full flex justify-between items-center">
        <nuxt-link v-show="route.path === '/'" to="https://codecember.netlify.app/" target="_blank">
          codecember
        </nuxt-link>
        <nuxt-link v-show="route.path !== '/'" to="/">
          <Icon class="text-xl opacity-50" name="lucide:chevron-left" />
        </nuxt-link>
        <div class="flex flex-row justify-center gap-4">
          <toggle-theme />
          <nuxt-link to="https://atlaxt.me" target="_blank" class="opacity-70">
            <img v-show="isDark" src="https://atlaxt.me/sign_white.png" alt="Atlaxt" class="w-8 h-8">
            <img v-show="!isDark" src="https://atlaxt.me/sign_black.png" alt="Atlaxt" class="w-8 h-8">
          </nuxt-link>
        </div>
      </div>
      <div class="pt-42 w-full flex justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>
