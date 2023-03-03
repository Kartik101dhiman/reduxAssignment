import { createSlice } from "@reduxjs/toolkit";

export const modal= createSlice({
    name: 'modal',
    initialState:{
   
        Modal: false,
        confirmModal: false
    },
    reducers:{

      
        openModal: (state)=>{
            state.Modal=true
        },
        closeModal: (state)=>{
            state.Modal=false
        },
       
        openConfirmModal: (state)=>{
            state.confirmModal=true;
        },
        closeConfirmModal: (state)=>{
            state.confirmModal=false;
        },
      
    }
    

})


export const {
   
    closeModal,
    openModal,
    openConfirmModal,
    closeConfirmModal
 }=modal.actions;

export default modal.reducer