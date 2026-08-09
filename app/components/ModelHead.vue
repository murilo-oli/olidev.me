<script setup lang="ts">
import { Vector3, Euler } from 'three'

const cameraPosition = new Vector3(-3.300759657644351, 0.4679117514674291, 4.060953567559194)
const cameraRotation = new Euler(-0.09756933059876954, -0.6848865618000878, -0.06183857104813489, 'XYZ')
</script>

<template>
  <div class="w-[130px] h-[130px] aspect-video">
    <TresCanvas
      alpha
      :clear-alpha="0"
    >
      <TresPerspectiveCamera
        :zoom="14"
        :rotation="cameraRotation"
        :position="cameraPosition"
      />
      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight :args="['#E5C07B', 1]" />
      <TresSpotLight :args="['#98C379', 1, 100, Math.PI / 6, 0.5, 2]" />
      <Suspense>
        <ModelHeadPrimitive />
      </Suspense>
    </TresCanvas>
  </div>
</template>