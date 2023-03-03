import React from 'react'
import { Toolbar } from '@mui/material'

const MUIToolBar = (props) => {
    const { children, ...rest } = props;
    return <Toolbar {...rest}>{children}</Toolbar>
  
}

export default MUIToolBar