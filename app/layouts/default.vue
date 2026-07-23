<script setup lang="ts">
</script>

<template>
  <div class="dark:bg-black bg-white dark:text-white text-black w-screen h-screen">
    <toggle-theme />
    <div class="max-w-xl mx-auto pt-32">
      <slot />
    </div>
  </div>
</template>
