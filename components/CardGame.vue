<script setup lang="ts">
import { computed } from "vue"
import { transliterate } from "~/utils/translate";
import type { IGameCard } from "~/types/gameCard";

interface Props {
  card: IGameCard
  index: number
}

const props = defineProps<Props>()

const level = transliterate(props.card.level);
const title = transliterate(props.card.title);
const url = `/game/${level}/${title}/${props.card.id}`;


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
  <v-card>
    <nuxt-link
        :to="url"
        class="text-decoration-none d-flex flex-column align-start pa-4"
    >
      <h3 class="text-primary mb-2">{{ card.title }}</h3>
      <p class="text-primary mb-4">{{ card.description }}</p>
      <div class="d-flex flex-wrap ga-2">
        <v-chip :color="colorChip">{{ card.level }}</v-chip>
        <v-chip :color="card.completed ? 'green' : 'red'">{{ card.completed ? 'Пройдено' : 'Не пройдено' }}</v-chip>
      </div>
    </nuxt-link>
  </v-card>
</template>

<style scoped lang="scss">

</style>