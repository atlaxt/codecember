<script setup lang="ts">
import { arts } from '~/arts'

const isOpen = ref(false)

const route = useRoute()

const art = computed(() => {
  const path = route.path
  if (path === '/')
    return 'Codecember'
  const index = parseInt(path.slice(1)) - 1
  return arts[index] || 'Codecember'
})
</script>

<template>
  <div v-if="route.path !== '/'" class="fixed bottom-0 flex justify-center w-full">
    <button
      class="border dark:border-x-neutral-700 border-x-neutral-200 dark:border-t-neutral-700 border-t-neutral-200 border-b-transparent px-4 h-10"
      @click="isOpen = !isOpen"
    >
      <Icon name="ph:question-mark-light" />
    </button>

    <div
      class="md:w-xl w-full transition-[bottom] duration-300 flex flex-col p-4 gap-4 border absolute dark:bg-black bg-white dark:border-x-neutral-700 border-x-neutral-200 dark:border-t-neutral-700 border-t-neutral-200 border-b-transparent"
      :class="{
        'bottom-0': isOpen,
        '-bottom-96': !isOpen,
      }"
    >
      <button class="opacity-50 ml-auto" @click="isOpen = false">
        <Icon name="ph:x" />
      </button>
      <p>
        <!-- This is a simple note component. -->
      </p>

      <div class="flex flex-row items-end gap-4 w-full uppercase text-sm opacity-60">
        <NuxtLink target="_blank" :to="`https://codecember.netlify.app/2020/${arts.indexOf(art) + 1}`">
          codegen
        </NuxtLink>
        .
        <NuxtLink target="_blank" :to="`https://github.com/atlaxt/codecember/blob/master/app/pages/${(arts.indexOf(art) + 1).toString().padStart(3, '0')}.vue`">
          source
        </NuxtLink>
        <!-- <NuxtLink to="https://atlaxt.me" target="_blank" class="ml-auto">
          <img v-show="isDark" src="https://atlaxt.me/sign_white.png" alt="Atlaxt" class="w-8 h-8">
          <img v-show="!isDark" src="https://atlaxt.me/sign_black.png" alt="Atlaxt" class="w-8 h-8">
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>
