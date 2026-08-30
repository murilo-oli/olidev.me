<script setup lang="ts">
import type { Social } from '@/types/types';
const socials: Social[] = [
  { collection: 'mdi', icon: 'github-box', url: 'https://github.com/murilo-oli', style: 'hover:text-main-purple' },
  { collection: 'mdi', icon: 'linkedin', url: 'https://www.linkedin.com/in/murilo-o/', style: 'hover:text-main-blue' },
  { collection: 'mdi', icon: 'at', url: 'mailto:muriloholiveira@hotmail.com', style: 'hover:text-main-red' },
];
</script>

<template>
  <section class="flex flex-row gap-x-2">
    <a
      v-for="(social, idx) in socials"
      :key="idx"
      :href="social.url"
      target="_blank"
      class="transition-transform ease-in-out hover:scale-125"
    >
      <Icon
        :name="`${social.collection}:${social.icon}`"
        :class="social.style"
        class="text-main-white transition-colors ease-in-out"
        size="24"
      />
    </a>
  </section>
</template>