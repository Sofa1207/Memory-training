import { defineStore } from "pinia";
import type { IGameEz, IGameMedium, IGameHard } from "~/types/game";

export const useGameStore = defineStore('game_store', {
    state: () => ({
        gameLevelEz: [
            {
                title: 'Игра на память',
                desc: 'gfdgdfgdfgdfgdf gfgdfg dfgfdg gd fgdf ',
                level: 'Легкий'
            },
            {
                title: 'Игра на память',
                desc: 'gfdgdfgdfgdfgdf gfgdfg dfgfdg gd fgdf ',
                level: 'Легкий'
            },
            {
                title: 'Игра на память',
                desc: 'gfdgdfgdfgdfgdf gfgdfg dfgfdg gd fgdf ',
                level: 'Легкий'
            },
        ] as IGameEz[],
        gameLevelMedium: [
            {
                title: 'Игра на память',
                desc: 'gfdgdfgdfgdfgdf gfgdfg dfgfdg gd fgdf ',
                level: 'Средний'
            },
            {
                title: 'Игра на память',
                desc: 'gfdgdfgdfgdfgdf gfgdfg dfgfdg gd fgdf ',
                level: 'Средний'
            },
        ] as IGameMedium[],
        gameLevelHard: [
            {
                title: 'Игра на память',
                desc: 'gfdgdfgdfgdfgdf gfgdfg dfgfdg gd fgdf ',
                level: 'Тяжелый'
            },
        ] as IGameHard[]
    })
})