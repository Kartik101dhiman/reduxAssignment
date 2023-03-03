import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
// import {
//   openModal,
//   closeModal,
// } from "../../Store/Reducer";
import { closeModal } from '../../Store/Reducer/Modal';
import { Modal } from "@mui/material";
import { MUIBox,MUITypography } from '../MUIcomponent';
import { CloseIcon } from '../Icons/Icons';







const MUIModal = (props) => {
  const { data }=props;
    const modalState=  useSelector((state) => state.userdata.modal.Modal);
  console.log(modalState,'state')
    const dispatch= useDispatch(); 
    const handleClose = () => dispatch(closeModal());


  return (
<div className='modalcontainer'>
     <Modal
        open={modalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <MUIBox  className="modalContainer">
         <MUIBox className="closeIconContainer" onClick={()=>dispatch(closeModal())}><CloseIcon fontSize='large'/></MUIBox> 
          <MUITypography id="modal-modal-title" variant="h6" component="h2">
           User Details
          </MUITypography>
          <MUITypography id="modal-modal-description" sx={{ mt: 2 }}>
            Firstname: {data[0].firstname}
          </MUITypography>
          <MUITypography id="modal-modal-description" sx={{ mt: 2 }}>
          Lastname: {data[0].lastname}
          </MUITypography>
          <MUITypography id="modal-modal-description" sx={{ mt: 2 }}>
         Email: {data[0].email}
          </MUITypography>
          <MUITypography id="modal-modal-description" sx={{ mt: 2 }}>
          City: {data[0].city}
          </MUITypography>
          <MUITypography id="modal-modal-description" sx={{ mt: 2 }}>
          Gender: {data[0].gender}
          </MUITypography>
        </MUIBox>
      </Modal>
    </div>
  
  )
}

export default MUIModal




