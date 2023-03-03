import  React, { useEffect,useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector,useDispatch } from 'react-redux';
// import { closeloader } from '../../Store/Reducer';
   
import { closeloader } from '../../Store/Reducer/Loader';





const Loader = () => {
    
    const dispatch=useDispatch();
   
    
    const handleToggle = () => {
      dispatch(closeloader());
    };
  
    const loader= useSelector((state)=>state.userdata.loader.Open);
    console.log(loader);
         

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loader}
      onClick={handleToggle}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loader


