<script setup lang="ts">
import ModelHead from './ModelHead.vue';
</script>

<template>
  <section class="w-full h-96 flex flex-row items-end justify-between gap-y-2">
    <section class="flex flex-col justify-between h-full">
      <SocialsList class="mt-4" />
      <div>
        <p class="font-bold md:text-4xl mt-2 text-2xl">
          Hi,
        </p>
        <p class="font-bold md:text-4xl text-2xl">
          I'm Murilo Oliveira <i class="font-normal text-sm text-main-green">(a.k.a oli)</i>
        </p>
        <span class="text-main-gray font-medium md:text-xl text-lg">Building cool stuffs. See you!</span>
      </div>
    </section>
    <ModelHead />
  </section>
</template>