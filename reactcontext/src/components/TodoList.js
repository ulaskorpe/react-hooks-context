
import React, {   useContext, useState  } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";
 

import Swal from 'sweetalert2';


const TodoList = ()=>{
  //   const [todo,setTodo] = useState('');
     const [todo,setTodo] = useState('');
    const {isDarkTheme,darkTheme,lightTheme,changeTheme} =  useContext(ThemeContext);
    const theme =  isDarkTheme ? darkTheme: lightTheme;
    const {todos,dispatch} = useContext(TodoListContext);
    const handleChange = (e)=>{
           setTodo(e.target.value)
    }
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        if(todo.length>0){
       /// addTodo(todo);
       dispatch({type:'ADD_TODO',text:todo});
        setTodo('');
    }else{
        Swal.fire({
            title: 'Warning!',
            text: 'enter value',
            icon: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: '#d33',
          });
    }
        
    }

  
        const handleRemoveTodo = (e) => {
            Swal.fire({
              title: 'Are you sure?',
              text: 'You won\'t be able to revert this!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
            }).then((result) => {
              if (result.isConfirmed) {
                // User confirmed, perform the action
             //   removeTodo(e.target.id);
             dispatch({type:'REMOVE_TODO',id:e.target.id})
              } else {
                // User canceled, do nothing or show a message
                console.log('Canceled');
              }
            });
          };
        
   
    return(

        <div className="ui list" style={{background:theme.background , color :theme.text, textAlign:'center'  }}>
             {todos.length  ? (

                todos.map(todo =>{
                    return(<p className="item" key={todo.id} id={todo.id}  onClick={handleRemoveTodo} >{todo.text}    </p>)
                })
             ): <div>NOTHNDG</div>}
            
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="todo">Add Todo:</label>
                        <input type="text" id="todo" value={todo}  onChange={handleChange} />
                        <input type="submit" className="ui button primary" value="add new todo" style={{marginLeft:"10px"}}/>
                    </form>

        <button className="ui button primary" onClick={changeTheme}>Change</button>
        </div>
    )
};

export default TodoList;


// import React, { Component } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// class TodoList extends Component
// {
//     static contextType = ThemeContext;
    

//     render(){
//         const {isDarkTheme,darkTheme,lightTheme,changeTheme} = this.context;
//         const theme =  isDarkTheme ? darkTheme: lightTheme;
//         return(
//             <div className="ui list" style={{background:theme.background , color :theme.text, textAlign:'center'  }}>
//                     <p className="item">a1</p>
//                     <p className="item">a2</p>
//                     <p className="item">b3</p>
//                     <p className="item">b34</p>
//                         <button className="ui button primary" onClick={changeTheme}>Change</button>
                         
//             </div>
//         )
//     }
// }

// export default TodoList;