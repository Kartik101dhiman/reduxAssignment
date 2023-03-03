import { createSlice } from "@reduxjs/toolkit";

export const loader= createSlice({
    name: 'loader',
    initialState:{
        Open: false,
     
    },
    reducers:{  
        openloader: (state)=>{
                state.Open= true
        },
        closeloader: (state)=>{
                state.Open=false
        }
    }
    

})


export const {
    openloader,
    closeloader,
 }=loader.actions;

export default loader.reducer