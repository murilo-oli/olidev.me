<script setup lang="ts">
import type { Route } from '@/types/types'
import { useRoute } from '#app'

const currentRoute = useRoute()
const routes : Route[] = [
  {path: '/', label: 'about', color: 'main-green'},
  {path: '/projects', label: 'projects', color: 'main-purple'},
  {path: '/playground', label: 'fun', color: 'main-yellow'},
]

</script>


<template>
  <nav class="flex flex-row justify-between gap-4 mb-2">
    <NuxtLink
      v-for="(route, routeIdx) in routes"
      :key="routeIdx"
      :to="route.path"
      class="w-full px-4 py-2 text-center border-b transition-colors"
      :class="currentRoute.path === route.path
        ? [`text-${route.color}`, `border-${route.color}`]
        : ['text-slate-400', 'border-slate-500', `hover:text-${route.color}`, `hover:border-${route.color}`]"
    >
      {{ route.label }}
    </NuxtLink>
  </nav>
</template>