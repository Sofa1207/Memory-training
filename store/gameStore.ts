import { defineStore } from "pinia";
import { ref } from "vue";
import type { IGameEz, IGameMedium, IGameHard } from "~/types/game";

export const useGameStore = defineStore('game_store', () => {
    let gameLevelEz = ref<IGameEz[]>([
        {
            id: 0,
            title: 'Выделенные слова',
            description: 'Задания представляют из себя предложения с выделенными словами, которые вы должны запомнить. Предложение показывается всего на 3 секунды, затем выделенные слова нужно будет ввести в специальных полях ввода. Учтите что регистр, специальные символы (запятые, скобки и т.д.) и порядок слов также учитывается.',
            level: 'Легкий',
            endResults: [],
            completed: false,
            tasks: [
                {
                    id: 0,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 1,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
            ]
        },

    ])
    let gameLevelMedium = ref<IGameMedium[]>([
        {
            id: 0,
            title: 'Игра на память',
            description: 'Задания представляют из себя предложения с выделенными словами, которые вы должны запомнить. Предложение показывается всего на 3 секунды, затем выделенные слова нужно будет ввести в специальных полях ввода. Учтите что регистр, специальные символы (запятые, скобки и т.д.) и порядок слов также учитывается.',
            level: 'Средний',
            endResults: [],
            completed: false,
            tasks: [
                {
                    id: 0,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 1,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 2,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
            ]

        },
        {
            id: 1,
            title: 'Игра на память',
            description: 'Задания представляют из себя предложения с выделенными словами, которые вы должны запомнить. Предложение показывается всего на 3 секунды, затем выделенные слова нужно будет ввести в специальных полях ввода. Учтите что регистр, специальные символы (запятые, скобки и т.д.) и порядок слов также учитывается.',
            level: 'Средний',
            endResults: [],
            completed: false,
            tasks: [
                {
                    id: 0,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 1,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 2,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
            ]

        },
    ])
    let gameLevelHard = ref<IGameHard[]>([
        {
            id: 0,
            title: 'Игра на память',
            description: 'Задания представляют из себя предложения с выделенными словами, которые вы должны запомнить. Предложение показывается всего на 3 секунды, затем выделенные слова нужно будет ввести в специальных полях ввода. Учтите что регистр, специальные символы (запятые, скобки и т.д.) и порядок слов также учитывается.',
            level: 'Тяжелый',
            endResults: [],
            completed: false,
            tasks: [
                {
                    id: 0,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 1,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
                {
                    id: 2,
                    title: 'Отметьте выделяемые слова',
                    sentence: 'Чем больше персонаж получает баллов смущения в мудлетах, тем сильнее эмоция: смущенный (от +1 балла к эмоции), очень смущенный (от +4 баллов) и подавленный (от +8 баллов).',
                    result: [],
                    typeTask: 'highlight'
                },
            ]
        },
    ])

    function highlightRandomWords(sentence: string, count: number): Record<string, string | string[]> {
        const words = sentence.split(' ');
        const highlightedIndices: number[] = [];
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6'];
        let result = '';

        count = Math.min(count, words.length);

        while (highlightedIndices.length < count) {
            const randomIndex = Math.floor(Math.random() * words.length);
            if (!highlightedIndices.includes(randomIndex)) {
                highlightedIndices.push(randomIndex);
            }
        }

        for (let i = 0; i < words.length; i++) {
            if (highlightedIndices.includes(i)) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                result += `<span style="color: ${color}">${words[i]}</span> `;
            } else {
                result += words[i] + ' ';
            }
        }

        const highlightedWords =
            highlightedIndices
                .sort((a, b) => a - b)
                .map(index => words[index]);
        return { sentence: result, words: highlightedWords };
    }

    return {
        gameLevelEz, gameLevelMedium, gameLevelHard,

        highlightRandomWords
    }

}, {
    persist: {
        paths: [
            'gameLevelEz',
            'gameLevelMedium',
            'gameLevelHard',
        ]

    }
});
