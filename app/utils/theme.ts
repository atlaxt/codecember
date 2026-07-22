export const isDark = computed(() => useColorMode().value === 'dark')

export function toggleDark() {
  const colorMode = useColorMode()
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

export const backgroundColor = computed(() => (isDark.value ? 0 : 255))
export const strokeColor = computed(() => (isDark.value ? 255 : 0))
