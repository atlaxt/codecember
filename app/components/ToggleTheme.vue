<template>
  <ClientOnly>
    <button
      class="opacity-50 text-xl"
      @click="toggleDark"
    >
      <Icon
        :name="isDark ? 'lucide:moon' : 'lucide:sun'"
      />
    </button>
  </ClientOnly>
</template>
