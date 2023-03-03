import React from 'react'
import { DialogContent } from '@mui/material';

const MUIDialogContent = (props) => {
    const { children, ...rest } = props;
    return <DialogContent {...rest}>{children}</DialogContent >
}

export default MUIDialogContent