import React from 'react'
import { TableContainer } from '@mui/material';



const MUITableContainer = (props) => {
    const { children, ...rest } = props;
    return <TableContainer {...rest}>{children}</TableContainer>
}

export default MUITableContainer