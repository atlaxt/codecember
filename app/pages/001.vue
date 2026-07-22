<script setup lang="ts">
import P5 from 'p5'

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
      p.stroke(strokeColor.value)

      for (let i = -10; i < 10; i++) {
        for (let j = -10; j < 10; j++) {
          const x = i * 15
          const y = j * 15

          const closeLineX = (p.mouseX - canvasSize / 2) - x
          const closeLineY = (p.mouseY - canvasSize / 2) - y

          p.line(x, y, x + closeLineX / 20, y + closeLineY / 20)
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
    <div ref="sketchRoot" class="sketch-shell" />
  </div>
</template>

<!--
const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);

  translate(width/2, height/2);
  stroke('#ffffff');

  for(let i = -10; i < 10; i++) {
    for(let j = -10; j < 10; j++) {
      let x = i * 15
      let y = j * 15

      let closeLineX = (mouseX - width/2) - x
      let closeLineY = (mouseY - height/2) - y

      line(x, y, x + closeLineX / 20, y + closeLineY / 20)
    }
  }
}
-->
