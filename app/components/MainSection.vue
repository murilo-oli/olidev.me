<script setup lang="ts">
import ModelHead from './ModelHead.vue';
</script>

<template>
  <section class="h-full w-full flex flex-col justify-end gap-y-2">
    <ModelHead />
    <p class="font-bold text-4xl mt-4">
      Hi,
    </p>
    <p class="font-bold text-4xl">
      I'm Murilo Oliveira <i class="font-normal text-sm text-main-green">(a.k.a oli)</i>
    </p>
    <span class="text-main-gray font-medium text-xl">Building cool stuffs. See you!</span>
    <SocialsList class="mt-4" />
  </section>
</template>