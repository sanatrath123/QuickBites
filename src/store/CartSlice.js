import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        additem: (state , action)=>{
            state.value.push(action.payload)
        },
        removeitem: (state, action)=> {
          state.value = state.value.filter((val)=>(
           val.card.info.id != action.payload.card.info.id 
           ))
        },
        clearcart: (state)=>{
            state.value.length===0
        }
    }  
})

export const {additem ,removeitem ,clearcart} = cartSlice.actions

export default cartSlice.reducer

