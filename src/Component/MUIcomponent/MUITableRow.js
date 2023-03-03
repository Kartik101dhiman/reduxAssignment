import React from 'react'
import { TableRow } from '@mui/material';

const MUITableRow = (props) => {
    const { children, ...rest } = props;
    return <TableRow {...rest}>{children}</TableRow>
}

export default MUITableRow