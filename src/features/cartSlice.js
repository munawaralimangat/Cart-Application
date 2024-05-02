import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id)
            if(existingItemIndex !== -1 ){
                state[existingItemIndex].quantity += 1
            }else{
                state.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            return state.filter(item => item.id !== action.payload)
        },
        increment:(state,action) =>{
            const index = state.findIndex(item => item.id === action.payload)
            if(index !== -1){
                state[index].quantity += 1
            }
        },
        decrement:(state,action)=>{
            const index = state.findIndex(item => item.id === action.payload)
            if(index !== -1){
                state[index].quantity -= 1

                if(state[index].quantity <1){
                    state.splice(index,1)
                }
            }
        }
    }
});

export const {addToCart,removeFromCart,increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;