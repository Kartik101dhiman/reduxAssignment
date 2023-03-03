import React,{useState} from 'react';

import { useSelector,useDispatch } from 'react-redux';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MUIStack from '../MUIcomponent/MUIStack';

// import {closeSnake,openSnake} from "../../Store/Reducer"
import { closeSnake } from '../../Store/Reducer/Snackbar';



  const SnackBar=()=> {
    const dispatch = useDispatch();
    const snake= useSelector((state)=>state.userdata.Snackbar.Opensnakebar)


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnake())
  };

  return (
    <MUIStack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snake.Openbar} autoHideDuration={2000} onClose={handleClose}>
      <MuiAlert elevation={6}  variant="filled" onClose={handleClose} severity={snake.severity} sx={{ width: '100%' }}> {snake.message}</MuiAlert>
      </Snackbar>
    </MUIStack>
  );
}
export default SnackBar