import { Tooltip } from '@mui/material';
import React from 'react'

const MUITooltip = (props) => {
    const { children, ...rest } = props;
    return <Tooltip {...rest}>{children}</Tooltip>
}

export default MUITooltip