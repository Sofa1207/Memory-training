export type typeTask = 'highlight'

export interface ITask {
    id: number,
    title: string,
    sentence: string,
    typeTask: typeTask,
    result: boolean[],
}

interface IGame {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    endResults:  {
        id: number,
        result: number,
        quantityResult: number
    }[]
    tasks: ITask[]
}

export interface IGameEz  extends IGame {
    level: 'Легкий'
}

export interface IGameMedium extends IGame {
    level: 'Средний'
}

export interface IGameHard extends IGame {
    level: 'Тяжелый'
}