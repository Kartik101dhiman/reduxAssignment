import React from 'react'
import { List } from '@mui/material';

const MUIList = (props) => {
    const { children, ...rest } = props;
    return <List {...rest}>{children}</List>
}

export default MUIList