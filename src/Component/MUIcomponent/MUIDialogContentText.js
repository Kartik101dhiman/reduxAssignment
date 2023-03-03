import React from 'react'
import { DialogContentText } from '@mui/material';

const MUIDialogContentText = (props) => {
    const { children, ...rest } = props;
    return <DialogContentText {...rest}>{children}</DialogContentText >
}

export default MUIDialogContentText