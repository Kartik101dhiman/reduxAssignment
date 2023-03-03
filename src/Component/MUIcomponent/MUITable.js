import React from 'react'
import { Table } from '@mui/material';



const MUITable = (props) => {
    const { children, ...rest } = props;
    return <Table {...rest}>{children}</Table>
}

export default MUITable