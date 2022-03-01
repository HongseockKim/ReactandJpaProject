import * as types from '../action/ActionType';

const initialize = {
    todo: 0
};


export default function Reducer(state = initialize,action) {

    switch (action.type) {
        case types.GETTODO :
            return {
                ...state,
                todo: state.todo + 1
            };
        default:
            return state
    }
}

