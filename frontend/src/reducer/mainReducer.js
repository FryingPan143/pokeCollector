const mainReducer = (state, action) => {

    switch (action.type) {
        case "ADD_STATE":

            return {
                state: action.payload
            }

        case "CHANGE_POKEMON":
            let pokeId = action.payload - 1;
            state.state.results[pokeId].amount = action.payload2;

            return state

        case "ADD_TRAINER":

            state.state.trainer = action.payload;
            console.log(state.state.trainer);
            return state

        case "REMOVE_TRAINER":
            state.state.trainer = {}
            console.log(state.state.trainer);
            return state


        default:
            return {
                ...state
            };
    }
}



export default mainReducer;


