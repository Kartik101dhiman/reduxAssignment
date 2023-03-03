import React from 'react'
import { DialogActions } from '@mui/material';

const MUIDialogActions = (props) => {
    const { children, ...rest } = props;
    return <DialogActions {...rest}>{children}</DialogActions >
}

export default MUIDialogActions