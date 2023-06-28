import * as TodoActions from "./actions";

export const todosReducer = (state = [], action) => {
    const {type} = action;
    
    switch(type) {
        //Create
        case TodoActions.CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
        }
        //Read
        case TodoActions.GET_TODOS_SUCCESS: {
            return action.todos || [];
        }
        //Update
        case TodoActions.UPDATE_TODO_SUCCESS: {
            return state.map(item => item.id === action.todo.id ? {...action.todo}:{...item})
        }
        //Remove
        case TodoActions.REMOVE_TODO: {
            return state.map(s => todo(s,action))
        }
        case TodoActions.REMOVE_TODO_SUCCESS: {
            return state.filter(todo => todo.id !== action._id);
        }
        default :
            return state;
    }
}