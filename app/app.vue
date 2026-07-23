<script setup lang="ts">
import { arts } from './arts'
import './assets/css/main.css'

const router = useRouter()

const artName = computed(() => {
  const path = router.currentRoute.value.path
  if (path === '/')
    return 'Codecember'
  const index = parseInt(path.slice(1)) - 1
  return arts[index] || 'Codecember'
})

useHead({
  title: artName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
