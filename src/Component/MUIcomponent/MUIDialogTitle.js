import React from 'react'
import { DialogTitle } from '@mui/material';


const MUIDialogTitle = (props) => {
    const { children, ...rest } = props;
    return <DialogTitle {...rest}>{children}</DialogTitle >
}

export default MUIDialogTitle