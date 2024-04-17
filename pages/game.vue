<script setup lang="ts">
import { useGameStore } from "~/store/gameStore";
const game_store = useGameStore()

const gameEz = game_store.gameLevelEz
const gameMedium = game_store.gameLevelMedium
const gameHard = game_store.gameLevelHard
</script>

<template>
  <v-main class="game bg-secondary">
    <section>
      <v-container>
        <h1 class="text-primary mb-4">Игры</h1>

        <Accordion
          title="Легкие"
          :cards="gameEz"
        />

        <Accordion
          title="Средние"
          :cards="gameMedium"
        />

        <Accordion
          title="Тяжелые"
          :cards="gameHard"
        />
      </v-container>

    </section>
  </v-main>
</template>

<style lang="scss">
.v-expansion-panel-text__wrapper {
  padding: 8px 0 16px 0;
}
</style>