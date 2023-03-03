import React from 'react'
import { CardContent } from '@mui/material';

const MUICardContent = (props) => {
    const { children, ...rest } = props;
    return <CardContent {...rest}>{children}</CardContent>
}

export default MUICardContent