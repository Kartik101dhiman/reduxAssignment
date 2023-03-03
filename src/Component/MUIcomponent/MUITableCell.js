import React from 'react'
import { TableCell } from '@mui/material';

const MUITableCell = (props) => {
    const { children, ...rest } = props;
    return <TableCell {...rest}>{children}</TableCell>
}

export default MUITableCell