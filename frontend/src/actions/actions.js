export const changePokemon = (id, count) => {
    return {
        type: "CHANGE_POKEMON",
        payload: id,
        payload2: count
    }
}

export const addTrainer = (trainer) => {
    return {
        type: "ADD_TRAINER",
        payload: trainer
    }
}

export const removeTrainer = (trainer) => {
    return {
        type: "REMOVE_TRAINER",
        payload: trainer
    }
}

export const addState = (data) => {
    return {
        type: "ADD_STATE",
        payload: data
    }
}