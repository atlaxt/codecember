<template>
  <ClientOnly>
    <button
      class="opacity-50 text-xl"
      @click="toggleDark"
    >
      <Icon
        :name="isDark ? 'ph:moon-light' : 'ph:sun-light'"
      />
    </button>
  </ClientOnly>
</template>
