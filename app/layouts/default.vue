<script setup lang="ts">
import MainSection from '~/components/MainSection.vue';
</script>

<template>
  <main
    class="h-screen flex flex-row items-center justify-center p-24 font-sans text-main-white bg-main-black/95 bg-[url('/assets/images/animated-bg.gif')] bg-cover bg-center bg-blend-multiply"
  >
    <section class="h-full w-full flex flex-row items-center justify-between p-6 rounded-lg bg-main-gray/10">
      <MainSection />
      <section class="h-full w-full flex items-center justify-center rounded-lg border-2 border-main-green">
        <slot />
      </section>
    </section>
  </main>
</template>