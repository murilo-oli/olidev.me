<script setup lang="ts">
import type { Social } from '@/types/types';
const socials: Social[] = [
  { collection: 'mdi', icon: 'github', url: '' },
  { collection: 'mdi', icon: 'linkedin', url: '' },
  { collection: 'mdi', icon: 'at', url: 'mailto:muriloholiveira@hotmail.com' },
];
</script>

<template>
  <section class="flex flex-row gap-2">
    <a
      v-for="(social, idx) in socials"
      :key="idx"
      :href="social.url"
      target="_blank"
    >
      <Icon
        :name="`${social.collection}:${social.icon}`"
        style="color:white"
        size="24"
      />
    </a>
  </section>
</template>