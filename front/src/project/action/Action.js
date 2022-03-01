import * as types from './ActionType';

export function getTodo(todo) {
    return {
        type: types.GETTODO,
        todo: todo
    };
}