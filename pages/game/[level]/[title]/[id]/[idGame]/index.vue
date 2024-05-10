<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useGameStore } from "~/store/gameStore";
import { useRoute, useRouter } from "vue-router";
import { transliterate } from "~/utils/translate";
import type { ITask, IGameHard, IGameEz, IGameMedium } from "~/types/game";

const game_store = useGameStore()
const route = useRoute()
const router = useRouter()

const gameId: number = parseInt(route.params.id as string);
const taskId: number = parseInt(route.params.idGame as string);

const game = ref<ITask | null | undefined>(null);
const levelGame = ref<IGameHard | IGameEz | IGameMedium>();
const countGame = ref<number>(0);
const nextTask = ref<number>(0)
function taskForm(data: boolean[]): void {

  if(route.params.level === 'legkiy') {
    game_store.gameLevelEz[gameId].tasks[taskId].result = data;
  } else if (route.params.level === 'sredniy') {
    game_store.gameLevelMedium[gameId].tasks[taskId].result = data
  } else if (route.params.level === 'tyazhelyy') {
    game_store.gameLevelHard[gameId].tasks[taskId].result = data
  }

  if (taskId + 1 < countGame.value) {
    nextTask.value = taskId + 1;
    router.push({ params: { idGame: nextTask.value.toString() } });
  } else {
    router.push({
      path: '/game/end',
      query: route.params
    });
  }
}

onMounted(() => {

  if(route.params.level === 'legkiy') {
    levelGame.value = game_store.gameLevelEz[gameId];
  } else if (route.params.level === 'sredniy') {
    levelGame.value = game_store.gameLevelMedium[gameId]
  } else if (route.params.level === 'tyazhelyy') {
    levelGame.value = game_store.gameLevelHard[gameId]
  }

  countGame.value = levelGame?.value?.tasks?.length;
  game.value = levelGame?.value?.tasks[taskId];
})
</script>

<template>
  <v-main class="bg-secondary">
    <section>
      <v-container>
        <v-sheet rounded="lg" class="white pa-4" min-height="70vh" v-if="game">
          <GamesHighlights
              :sentence="game.sentence"
              :level="transliterate(levelGame.level)"
              @update-form="taskForm"
          />
        </v-sheet>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped lang="scss">

</style>