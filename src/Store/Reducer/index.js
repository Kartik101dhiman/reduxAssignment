import  {combineReducers } from "@reduxjs/toolkit";
import  loader  from "./Loader";
import  Snackbar  from "./Snackbar";
import  modal  from "./Modal";
import  id  from "./Id";
import  userInformation from "./UserInformation";


 const userdetails= combineReducers({

    loader:loader,
    modal: modal,
    id:id,
    userInformation:userInformation,
    Snackbar:Snackbar
})

export default userdetails
  