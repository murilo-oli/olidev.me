<script setup lang="ts">
import MainSection from '~/components/MainSection.vue';
import NavBar from '~/components/NavBar.vue';
</script>

<template>
  <main
    class="h-screen flex flex-row items-center justify-center p-4 font-sans text-main-white bg-main-black/95 bg-[url('/assets/images/animated-bg.gif')] bg-cover bg-center bg-blend-multiply"
  >
    <section class="h-full w-full md:max-w-3xl overflow-auto flex flex-col items-center justify-between p-6 rounded-lg bg-main-gray/15 backdrop-blur-sm">
      <MainSection />
      <section class="h-full w-full flex flex-col gap-y-2 mt-10 py-2">
        <section class="">
          <NavBar />
          <div class="flex items-center justify-center mt-8">
            <slot />
          </div>
        </section>
      </section>
    </section>
  </main>
</template>