import { Avatar } from '@mui/material';
import React from 'react'

const MUIAvatar = (props) => {
    const { children, ...rest } = props;
    return <Avatar {...rest}>{children}</Avatar>
}

export default MUIAvatar