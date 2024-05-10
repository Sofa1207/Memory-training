<script setup lang="ts">
import { onMounted } from "vue"
import { useGameStore } from "~/store/gameStore";

const game_store = useGameStore()
onMounted(() => {
})
</script>

<template>
  <v-main class="main bg-secondary">
    <section class="main__about">
      <v-container>
        <v-sheet class="pa-4" rounded="lg" color="background">
          <h1 class="text-primary mb-4">
            Добро пожаловать на Memory Master — вашего лучшего помощника в тренировке памяти!
          </h1>
          <p class="text-primary mb-4">
            На нашем сайте вы найдете разнообразные инструменты и техники, предназначенные для улучшения кратковременной и долговременной памяти. Memory Master идеально подходит как для студентов, желающих улучшить учебные навыки, так и для взрослых и пожилых людей, стремящихся поддерживать и укреплять когнитивные функции.
          </p>
          <p class="text-primary text-h5 mb-2">Наши особенности:</p>
          <ol class="text-primary mb-6 ml-4">
            <li class="mb-2">
              <strong>Игры на запоминание</strong>: Потренируйтесь с нашими интерактивными и весёлыми играми, которые помогут вам улучшить способность запоминать числа, слова и образы.
            </li>
            <li class="mb-2">
              <strong>Тренировочные задания</strong>: Испытайте себя с помощью заданий различной сложности, которые адаптируются под ваш уровень и помогают отслеживать прогресс.
            </li>
            <li class="mb-2">
              <strong>Полезные статьи и советы</strong>: Узнайте лучшие методы и стратегии для тренировки памяти от экспертов в области нейронауки и психологии.
            </li>
            <li class="mb-2">
              <strong>Персонализированный подход:</strong> Создайте свой профиль и получите индивидуальные рекомендации на основе вашего текущего уровня и целей.
            </li>
          </ol>
          <p class="text-primary font-weight-medium text-h6">Присоединяйтесь к нам сегодня и начните свой путь к лучшей памяти! На Memory Master мы делаем обучение лёгким и доступным для всех.</p>
        </v-sheet>
      </v-container>
    </section>

  </v-main>
</template>

<style lang="scss">
.main {
  &__about {
    h1, p {
      line-height: normal;
    }
  }
}
</style>