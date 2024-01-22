//import React,{  createContext, useState } from "react";
import React,{  createContext, useReducer} from "react";
import { todosReducer } from "../reducers/TodosReducer";

export const TodoListContext = createContext();



const TodoListContextProvider = (props)=>{

   const todos_array = [
    {text: 'lord of the rings',id :1},
    {text: 'star wars',id :2},
    {text: 'dune',id :3},
    {text: 'dungeons and dragons',id :4}
    ] ;
  // const [todos,setTodos] =  useState(todos_array);
   const [todos, dispatch] = useReducer(todosReducer,todos_array);

//    const addTodo = (todo)=>{
//     setTodos([
//         ...todos, {text:todo,id: todos.length+1}
//     ])
//    }
//    const removeTodo = (id)=>{
//     console.log(id);
//     setTodos(todos.filter(todo =>{return todo.id !== parseInt(id)}))
//    }
    return(
     //   <TodoListContext.Provider value={{todos,addTodo,removeTodo}}>
        <TodoListContext.Provider value={{todos,dispatch}}>
            {  props.children }
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;