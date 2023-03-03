import React from 'react'
import { ListItem } from '@mui/material';

const MUIListItem = (props) => {
    const { children, ...rest } = props;
    return <ListItem {...rest}>{children}</ListItem>
}

export default MUIListItem