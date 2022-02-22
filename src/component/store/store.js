import * as Types from '../ActionType/ActionType';

const initialState ={
    Number: 0,
    todo: [],
    todoDetail:{id:"id",title:"title",content:"content"}
};

export  default function counter(state = initialState, action){
    let todoData = [];
    switch (action.type){
        case Types.GETTODODETAILINFO:
            return {
                ...state,
                todoDetail:{id:action.id,title:action.title,content:action.content}
            }
        case Types.INCREASE_COUNT:
            return {Number: state.Number + 1};
        case Types.GETDASHBORAD:
            if (state.todo) {
                state.todo.length = 0;
            }
            return {
                ...state.todo,
                todo: state.todo.concat(action.todo)
            }

        default:
            return state;
    }
}