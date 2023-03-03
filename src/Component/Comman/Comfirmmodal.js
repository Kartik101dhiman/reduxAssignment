import React from "react";

import { useDispatch, useSelector } from "react-redux"; 

import {MUIButton,
  MUIBox,MUIDialog,
  MUIDialogActions,
  MUIDialogContent,
  MUIDialogContentText,
  MUIDialogTitle} from "../MUIcomponent";

// import { closeConfirmModal, openConfirmModal,setUser,openSnake } from "../../Store/Reducer";
import { closeConfirmModal } from "../../Store/Reducer/Modal";
import { setUser } from "../../Store/Reducer/UserInformation";
import { openSnake } from "../../Store/Reducer/Snackbar";

const Confirmmodal = () => {
  const dispatch= useDispatch();
  const modalState= useSelector((state)=>state.userdata.modal.confirmModal);
  const selectData = useSelector((state) => state.userdata.userInformation.User);
  const userid= useSelector((state)=>state.userdata.id.Email)
  console.log(userid);
  const confirmHandle = () =>{
    dispatch(setUser(selectData.filter((el) => {
      return el.email !== userid;
  })))
  dispatch(closeConfirmModal());
  dispatch(
    openSnake({
        Openbar: true,
        severity: "success",
        message: "Delete successfully!",
    })
);

  }

  const cancelHandle = () =>{
      dispatch(closeConfirmModal());
  }
  return (
    <MUIBox>
      <MUIDialog
        open={modalState}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <MUIDialogTitle id="alert-dialog-title">Confimation box</MUIDialogTitle>
        <MUIDialogContent>
          <MUIDialogContentText id="alert-dialog-description">
          Want to delete data parmanently
          </MUIDialogContentText>
        </MUIDialogContent>
        <MUIDialogActions>
          <MUIButton onClick={() => confirmHandle()}>Confirm</MUIButton>
          <MUIButton onClick={() => cancelHandle()} autoFocus>
            Cancel
          </MUIButton>
        </MUIDialogActions>
      </MUIDialog>
    </MUIBox>
  );
};

export default Confirmmodal;
