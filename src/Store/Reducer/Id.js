import { createSlice } from "@reduxjs/toolkit";

export const id= createSlice({
    name: 'id',
    initialState:{
       
        Email:'',
      
    },
    reducers:{
        setEmail: (state,action)=>{
            state.Email=action.payload
        }
    }
})


export const {
    setEmail,
 }=id.actions;

export default id.reducer