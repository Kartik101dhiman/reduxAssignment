import React from 'react'
import { AppBar } from '@mui/material';


const MUIAppBar = (props) => {
    const { children, ...rest } = props;
    return <AppBar {...rest}>{children}</AppBar>;
  
}

export default MUIAppBar