import React from 'react'
import { TableSortLabel } from '@mui/material';


const MUITableSortLabel = (props) => {
    const { children, ...rest } = props;
    return <TableSortLabel {...rest}>{children}</TableSortLabel>
}

export default MUITableSortLabel