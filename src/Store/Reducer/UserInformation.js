import { createSlice } from "@reduxjs/toolkit";

export const userInformation= createSlice({
    name: 'userInformation',
    initialState:{
        User: [],
    },
    reducers:{

        adduser: (state,action)=>{
            state.User =[...state.User,action.payload]
        },
        setUser:(state,action)=>{
            state.User= action.payload;
        },
        updateUser: (state, action) => {
            const {index, values} = action.payload;
            state.User[index] = {...state.User[index], ...values};
        }
    }
    

})


export const {
    adduser,
    setUser,
    updateUser,
 }=userInformation.actions;

export default userInformation.reducer