import { createSlice } from "@reduxjs/toolkit";

export const Snackbar= createSlice({
    name: 'snake',
    initialState:{
        Opensnakebar: {
            Openbar: false,
            severity: '',
            message: ''
        },
        
    },
    reducers:{

        openSnake: (state,action)=>{
            state.Opensnakebar=action.payload
        },
        closeSnake: (state)=>{
            state.Opensnakebar.Openbar=false
        }
       
    }
    

})


export const {
   
    openSnake,
    closeSnake
 }=Snackbar.actions;

export default Snackbar.reducer