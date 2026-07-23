<template>
  <ClientOnly>
    <button
      @click="toggleDark"
    >
      <Icon
        :name="isDark ? 'lucide:moon' : 'lucide:sun'"
      />
    </button>
  </ClientOnly>
</template>
