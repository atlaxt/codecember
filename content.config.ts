import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
  },
})
