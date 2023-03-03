import React from 'react'
import { MenuItem } from '@mui/material';

const MUIMenuItem = (props) => {
    const { children, ...rest } = props;
    return <MenuItem {...rest}>{children}</MenuItem>
}

export default MUIMenuItem