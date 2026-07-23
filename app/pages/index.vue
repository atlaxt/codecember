<script setup lang="ts">
import { arts } from '~/arts'
</script>

<template>
  <div class="w-full">
    <NuxtLink
      v-for="(art, i) in arts" :key="i"
      :to="`/${String(i + 1).padStart(3, '0')}`"
    >
      <span class="opacity-50 text-xs"> {{ String(i + 1).padStart(3, '0') }} </span>  {{ art }}
    </NuxtLink>
  </div>
</template>
