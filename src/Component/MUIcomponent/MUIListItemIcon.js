import { ListItemIcon } from '@mui/material';
import React from 'react'

const MUIListItemIcon = (props) => {
    const { children, ...rest } = props;
    return <ListItemIcon {...rest}>{children}</ListItemIcon>
}

export default MUIListItemIcon