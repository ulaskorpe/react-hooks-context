// reducers/counter.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'data',
  //initialState: { value: 0 },
  initialState: { 

    cards :[
 
    ],
    users : []

  },
  reducers: {
    deleteCard: (state, action) => {
   
        state.cards = state.cards.filter((card) => card.id !== action.payload);
     
        
      },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

 
export const { deleteCard } = counterSlice.actions;
export default counterSlice.reducer;
