import React from 'react'
import { Dialog } from '@mui/material';


const MUIDialog = (props) => {
    const { children, ...rest } = props;
    return <Dialog {...rest}>{children}</Dialog >
}

export default MUIDialog