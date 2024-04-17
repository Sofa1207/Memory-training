<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  card: { type: Object, default: () => ({}) }
})

const colorChip = computed(() => {
  switch (props.card.level) {
    case 'Легкий':
      return 'green';
    case 'Средний':
      return 'yellow';
    case 'Тяжелый':
      return 'red'
  }
})
</script>

<template>
  <v-card class="pa-4">
    <h3 class="text-primary mb-2">{{ card.title }}</h3>
    <p class="text-primary mb-4">{{ card.desc }}</p>
    <v-chip :color="colorChip">{{ card.level }}</v-chip>
  </v-card>
</template>

<style scoped lang="scss">

</style>