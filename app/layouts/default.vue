<script setup lang="ts">
import MainSection from '~/components/MainSection.vue';
</script>

<template>
  <main class="h-screen flex flex-row items-center justify-between p-32 font-sans bg-main-black text-main-white">
    <MainSection />
    <section class="h-full w-full flex items-center justify-center bg-main-gray rounded-lg">
      <slot />
    </section>
  </main>
</template>