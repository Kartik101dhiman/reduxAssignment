import React from 'react'
import { TableBody } from '@mui/material';

const MUITableBody = (props) => {
    const { children, ...rest } = props;
    return <TableBody {...rest}>{children}</TableBody>
}

export default MUITableBody