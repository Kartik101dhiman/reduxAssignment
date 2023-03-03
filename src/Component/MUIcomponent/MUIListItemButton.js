import { ListItemButton } from '@mui/material';
import React from 'react'

const MUIListItemButton = (props) => {
    const { children, ...rest } = props;
    return <ListItemButton {...rest}>{children}</ListItemButton>
}

export default MUIListItemButton