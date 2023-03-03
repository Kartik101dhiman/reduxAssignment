import { configureStore } from "@reduxjs/toolkit";
import userdetails from "./Reducer";




export default configureStore({
    reducer:{
        userdata: userdetails,
    }
})