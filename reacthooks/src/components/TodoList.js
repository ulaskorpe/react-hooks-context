import React, { useState ,useEffect } from "react";
import AddTodo from "./AddTodo";
const TodoList = ()=>{
   const [todos,setTodos]= useState([
        { text:'Pay billl', id :1  },
        { text:'homework', id :2  },
        { text:'feeed me', id :3  },
        { text:'gym', id :4  },
    ]);

    const [count, setCount] = useState(0);
    const addTodo = (text)=>{
        setTodos([
            ...todos, {text ,id:todos.length+1}  ///Math.random()
        ])
    }
    useEffect(()=>{
        console.log("initial render");
    },[]);
    useEffect(()=>{
        console.log("todo effect",todos);
    },[todos]);

    useEffect(()=>{
        console.log("count effect",count);
    },[count]);


    return(<div>
        <ul>
            { todos.map(todo =>{
                return(<li key={todo.id}>{todo.text}</li>)
            })}
        </ul>
       <AddTodo addTodo={addTodo}/>
       <button onClick={()=>setCount(count+1)}>Score : {count}</button>
    </div>)
}

export default TodoList;