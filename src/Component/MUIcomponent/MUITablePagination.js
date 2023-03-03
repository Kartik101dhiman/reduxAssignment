import React from 'react'
import { TablePagination } from '@mui/material';


const MUITablePagination = (props) => {
    const { children, ...rest } = props;
    return <TablePagination {...rest}>{children}</TablePagination>
}

export default MUITablePagination