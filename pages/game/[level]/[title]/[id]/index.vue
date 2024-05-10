<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRouter, useRoute } from "vue-router";
import { useGameStore } from "~/store/gameStore";

const game_store = useGameStore()

const route = useRoute()

const gameEz = game_store.gameLevelEz
const gameMedium = game_store.gameLevelMedium
const gameHard = game_store.gameLevelHard

let gameLevel = ref()

onMounted(() => {
  if(route.params.level === 'legkiy') {
    gameLevel.value = gameEz[parseInt(route.params.id as string)]
  } else if (route.params.level === 'sredniy') {
    gameLevel.value = gameMedium[parseInt(route.params.id as string)]
  } else if (route.params.level === 'tyazhelyy') {
    gameLevel.value = gameHard[parseInt(route.params.id as string)]
  }
})
</script>

<template>
  <v-main class="game__page bg-secondary">
    <section>
      <v-container>
        <aside v-if="gameLevel">
          <v-sheet color="white" height="100%" rounded="lg" class="pa-4">
            <h1 class="text-primary mb-5 text-h4">{{ gameLevel.title }}</h1>
            <p class="text-primary mb-6 text-h6" style="line-height: normal">{{ gameLevel.description }}</p>
            <div class="d-flex justify-space-between">
              <nuxt-link to="/game" class="text-decoration-none">
                <v-btn class="text-none text-body-2 px-3 d-flex align-center" color="primary">
                  <v-icon size="14">mdi-arrow-left</v-icon>
                  <span class="mr-1">Вернуться</span>
                </v-btn>
              </nuxt-link>

              <nuxt-link :to="`${route.path}/0`" class="text-decoration-none">
                <v-btn class="text-none text-body-2 px-3 d-flex align-center" color="primary">
                  <span class="mr-1">Приступить</span>
                  <v-icon size="14">mdi-arrow-right</v-icon>
                </v-btn>
              </nuxt-link>
            </div>
          </v-sheet>
        </aside>
      </v-container>
    </section>

  </v-main>
</template>

<style scoped lang="scss">

</style>