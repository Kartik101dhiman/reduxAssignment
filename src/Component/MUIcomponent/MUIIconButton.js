import React from 'react'
import { IconButton } from '@mui/material';

const MUIIconButton = (props) => {
    const { children, ...rest } = props;
    return <IconButton {...rest}>{children}</IconButton>
}

export default MUIIconButton