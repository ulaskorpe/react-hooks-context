export const todosReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {text:action.text,id: state.length+1}
            ];
         case 'REMOVE_TODO':
            return  state.filter(todo =>  todo.id !== parseInt(action.id));

        default:
            return state;
      }

};