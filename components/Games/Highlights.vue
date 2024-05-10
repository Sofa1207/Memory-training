<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useGameStore } from "~/store/gameStore";

const game_store = useGameStore()
interface Props {
  sentence: string
  level: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update-form'])

type CountWords = 3 | 5 | 7
const countHighlightWords = ref<number & CountWords>(3)
const correctWords = ref<string | string[]>([])
const sentenceTask = ref<string | string[]>('')
const isCorrectWords = ref<boolean[]>([])

const timer = ref<boolean>(false)
const userInput = ref<string[]>([])

const formRef = ref();

type currentNumber = CountWords
const countTimer = ref<number | currentNumber>(3)
const onSubmit = (): void => {
  if (formRef.value.isValid) {
    userInput.value.map((item, index) => {
      isCorrectWords.value.push(item === correctWords.value[index])
    })

    if(isCorrectWords.value.length === userInput.value.length) {
      emit('update-form', isCorrectWords.value)
    }

  }
};


onMounted(() => {

  if(props.level === 'legkiy') {
    countHighlightWords.value = 3
    countTimer.value = 3
  } else if (props.level === 'sredniy') {
    countHighlightWords.value = 5
    countTimer.value = 5
  } else if (props.level === 'tyazhelyy') {
    countHighlightWords.value = 7
    countTimer.value = 7
  }

  const result = game_store.highlightRandomWords(props.sentence, countHighlightWords.value)

  correctWords.value = result.words
  sentenceTask.value = result.sentence

  userInput.value = correctWords.value.map(() => '')

  let timerId = ref(setInterval(function() {
    if (countTimer.value === 1) {
      clearInterval(timerId.value);
    }
    countTimer.value--;
  }, 1000))

  setTimeout(() => {
    timer.value = true
  }, countTimer.value * 1000)
})
</script>

<template>
  <v-sheet class="bg-transparent" rounded="lg">
    <div class="d-flex justify-space-between text-h5 mb-4">
      <span>Время</span>
      <span>00:0{{countTimer}}</span>
    </div>
    <div v-html="sentenceTask" v-if="!timer" class="text-h5"></div>
    <div v-else>
      <v-form ref="formRef" @submit.prevent="onSubmit">
        <v-text-field
            v-for="(word, index) in correctWords"
            :key="`input-word-${index}`"
            v-model="userInput[index]"
            variant="outlined"
            :label="`${index + 1}-слово`"
            color="primary"
            :rules="[v => !!v || 'Поле обязательно к заполнению']"
            class="mb-2"
        />

        <div class="d-flex justify-end mt-10">
          <v-btn type="submit" class="text-body-2" color="primary">
            Отправить
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">

</style>