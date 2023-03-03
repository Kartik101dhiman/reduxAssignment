import { TableHead } from '@mui/material';
import React from 'react'

const MUITableHead = (props) => {
    const { children, ...rest } = props;
    return <TableHead {...rest}>{children}</TableHead>
}

export default MUITableHead