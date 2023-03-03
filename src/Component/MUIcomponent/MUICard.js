import { Card } from '@mui/material';
import React from 'react'

const MUICard = (props) => {
    const { children, ...rest } = props;
    return <Card {...rest}>{children}</Card>
}

export default MUICard