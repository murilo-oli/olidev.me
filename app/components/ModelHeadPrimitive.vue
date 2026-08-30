<script setup lang="ts">
import { Vector3 } from 'three'
import { useGLTF } from '@tresjs/cientos'
import { useLoop } from '@tresjs/core'

const { state: model } = useGLTF('/models/head.glb')
const headPosition = new Vector3(0.05870164424180984, 0.00199999, 0.010734833776950836)
const { onBeforeRender } = useLoop()

let velocity:number = 0.3;

onBeforeRender(({ delta }) => {
  if (model.value) {
    model.value.scene.rotation.y += delta * velocity
    if (model.value.scene.rotation.y >= 0.5) velocity = -1 * velocity
    if (model.value.scene.rotation.y <= -0.2) velocity = -1 * velocity
  }
})
</script>

<template>
  <primitive
    v-if="model"
    :object="model.scene"
    :position="headPosition"
  />
</template>
