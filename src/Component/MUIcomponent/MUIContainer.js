import React from 'react'
import { Container } from '@mui/material';

const MUIContainer = (props) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>
}

export default MUIContainer