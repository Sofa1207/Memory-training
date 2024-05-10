<script setup lang="ts">
import type { IGameCard } from "~/types/gameCard";

interface Props {
  title: string
  cards: IGameCard[]
}

const props = defineProps<Props>()
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel color="secondary" elevation="0">
      <v-expansion-panel-title class="px-0" color="secondary">
        <h2 class="text-h6 text-primary">{{ title }}</h2>
        <v-divider class="mx-4"></v-divider>
        <template v-slot:actions>
          <v-icon color="primary" icon="mdi-menu-down">
          </v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="bg-secondary px-0">
        <nuxt-link
            v-for="(card, index) in cards"
            :key="`card-${card.level}-${index}`"
        >
          <card-game
              :card="card"
              :index="index"
              class="mb-4"
          />
        </nuxt-link>

      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="scss">

</style>