import React from 'react'
import { Paper } from '@mui/material';

const MUIPaper = (props) => {
    const { children, ...rest } = props;
    return <Paper {...rest}>{children}</Paper>;
}

export default MUIPaper