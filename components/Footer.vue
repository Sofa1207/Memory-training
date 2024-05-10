<script setup lang="ts">

import { useRoute } from "vue-router";

const route = useRoute()

interface IFooter {
  id: number,
  link: string,
  icon: string
}

const footerNav: readonly IFooter[] = [
  {
    id: 0,
    link: '/',
    icon: 'mdi-information-variant'
  },
  {
    id: 1,
    link: '/game',
    icon: 'mdi-controller'
  },
]

const isActive = (path: string): boolean => {
  if (path === '/' && route.path === '/') return true;

  return route.path.startsWith(path + '/') || route.path === path;
}

</script>

<template>
  <v-footer class="d-flex justify-space-around py-3" elevation="16">
    <nuxt-link
        v-for="link in footerNav"
        :key="link.id"
        :to="link.link"
        class="text-white bg-secondary rounded-lg pa-2"
        :class="{'text-primary': isActive(link.link)}"
    >
      <v-icon :icon="link.icon"></v-icon>
    </nuxt-link>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  .text-white.bg-secondary {
    transition: color 0.2s ease;
    .v-icon {
      transition: color 0.2s ease;
    }
    &.text-primary .v-icon {
      color: var(--v-primary-base);
    }
  }
}
</style>