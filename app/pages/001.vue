<script setup lang="ts">
import P5 from 'p5'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sketchRoot = ref<HTMLElement | null>(null)
let sketchInstance: P5 | null = null

onMounted(() => {
  if (!sketchRoot.value)
    return

  const canvasSize = 400

  sketchInstance = new P5((p) => {
    p.setup = () => {
      p.createCanvas(canvasSize, canvasSize)
      p.angleMode(p.DEGREES)
      p.rectMode(p.CENTER)
    }

    p.draw = () => {
      p.background(backgroundColor.value)

      p.translate(canvasSize / 2, canvasSize / 2)

      for (let i = -15; i < 15; i++) {
        for (let j = -15; j < 15; j++) {
          const x = i * 15
          const y = j * 15

          const getD = (_p: number, _n: number) => (_p - canvasSize / 2) - _n
          let dX = getD(p.mouseX, x)
          let dY = getD(p.mouseY, y)

          const d = p.dist(0, 0, dX, dY)

          const alpha = p.map(d, 0, 200, 200, 70, true)
          const c = p.color(strokeColor.value)
          c.setAlpha(alpha)
          p.stroke(c)

          if (d > 200) {
            const ratio = 200 / d
            dX *= ratio
            dY *= ratio
          }

          p.line(x, y, x + dX / 20, y + dY / 20)
        }
      }
    }
  }, sketchRoot.value)
})

onBeforeUnmount(() => {
  sketchInstance?.remove()
  sketchInstance = null
})
</script>

<template>
  <div>
    <div ref="sketchRoot" />
  </div>
</template>
