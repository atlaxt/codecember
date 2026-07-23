<script setup lang="ts">
import { arts } from '~/arts'

const { data: home } = await useAsyncData(() => queryCollection('home').path('/').first())
</script>

<template>
  <div class="flex flex-col gap-32 w-full">
    <div class="w-full grid grid-cols-3 gap-4">
      <NuxtLink
        v-for="(art, i) in arts" :key="i"
        :to="`/${String(i + 1).padStart(3, '0')}`"
      >
        <span class="opacity-50 text-xs"> {{ String(i + 1).padStart(3, '0') }} </span>  {{ art }}
      </NuxtLink>
    </div>

    <ContentRenderer v-if="home" class="content prose dark:prose-invert" :value="home" />

    <div class="flex flex-row gap-2">
      <NuxtLink class="uppercase text-sm" to="https://github.com/atlaxt" target="_blank">
        github
      </NuxtLink>
      .
      <NuxtLink class="uppercase text-sm" to="https://atlaxt.me" target="_blank">
        atlaxt
      </NuxtLink>
    </div>
  </div>
</template>
