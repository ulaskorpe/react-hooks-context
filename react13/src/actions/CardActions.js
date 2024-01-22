import axios from "axios";

export const deleteCard = (id)=>{
    return {
        type :'DELETE_CARD',
        id
    }
};

export const fetchUser=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/user')
     // .then(response => response.json())
      //.then(json => console.log(json))
      .then(({data})=>{
            dispatch({type:'FETCH_USER',payload: data})
      })
    }
}