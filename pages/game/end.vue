<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter} from "vue-router";
import { useGameStore } from "~/store/gameStore";
import type { ITask, IGameHard, IGameEz, IGameMedium } from "~/types/game";

const game_store = useGameStore()
const route = useRoute()
const router = useRouter()

const levelGame = ref<IGameHard | IGameEz | IGameMedium>();
const gameId: number = parseInt(route.query.id as string);

interface IGameEndResult {
  id: number,
  result: number,
  quantityResult: number
}
const gameEndResult = ref<IGameEndResult[]>()
const percentAllTask = ref<number>()
function calculateCompletionRate(data: IGameEndResult[] | undefined): number {
  if(!data) {
    return 0
  }

  const totalTasks = data.reduce((sum, item) => sum + item.quantityResult, 0);
  const completedTasks = data.reduce((sum, item) => sum + item.result, 0);
  const completionRate = (completedTasks / totalTasks) * 100;
  return Number(completionRate.toFixed(2));
}

onMounted(() => {

  if(route.query.level === 'legkiy') {
    levelGame.value = game_store.gameLevelEz[gameId];
  } else if (route.query.level === 'sredniy') {
    levelGame.value = game_store.gameLevelMedium[gameId]
  } else if (route.query.level === 'tyazhelyy') {
    levelGame.value = game_store.gameLevelHard[gameId]
  }

  levelGame.value.completed = true

  gameEndResult.value = levelGame?.value?.tasks.map(task => ({
    id: task.id,
    result: task.result.reduce((acc, cur) => acc + (cur ? 1 : 0), 0),
    quantityResult: task.result.length
  }));

  levelGame.value.endResults = gameEndResult.value

  percentAllTask.value = calculateCompletionRate(gameEndResult.value)
})
</script>

<template>
  <v-main class="bg-secondary">
    <section class="game-end h-100">
      <v-container>
        <v-sheet rounded="lg" class="white pa-4" min-height="100%">
          <h1 class="mb-5 text-primary text-h6">Поздравляем! Вы прошли этап!</h1>
          <ul class="mb-10">
            <li
                v-for="(result, index) in gameEndResult"
                :key="`result-${index}`"
                class="mb-4"
            >
              <h3>Результаты {{ result.id + 1 }} игры: </h3>
              <span>Правильных слов: {{ result.result}} из {{ result.quantityResult }}</span>
            </li>
          </ul>

          <h4 class="text-h6 mb-4">Общая статистика игры: </h4>
          <div class="d-flex justify-center align-center mb-10">
            <v-progress-circular
                :model-value="percentAllTask ? percentAllTask : 0"
                size="100"
                width="10"
                color="primary"
                class="mr-4"
            >
              {{ percentAllTask }}%
            </v-progress-circular>
            <div class="d-flex flex-column">
              <p>Процент</p>
              <p>{{ percentAllTask }}/100%</p>
            </div>
          </div>

          <nuxt-link :to="'/game'" class="text-decoration-none d-flex justify-end">
            <v-btn class="text-none text-body-2 px-3 d-flex align-center" color="primary">
              <span class="mr-1">Вернуться</span>
              <v-icon size="14">mdi-arrow-right</v-icon>
            </v-btn>
          </nuxt-link>

        </v-sheet>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped lang="scss">

</style>