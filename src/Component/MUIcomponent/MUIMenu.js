import React from 'react'
import Menu from '@mui/icons-material/Menu';

const MUIMenu = (props) => {
    const { children, ...rest } = props;
    return <Menu {...rest}>{children}</Menu>
}
export default MUIMenu