import React from 'react';
import { ListItemText } from '@mui/material';


const MUIListItemText = (props) => {
    const { children, ...rest } = props;
    return <ListItemText {...rest}>{children}</ListItemText>
}

export default MUIListItemText