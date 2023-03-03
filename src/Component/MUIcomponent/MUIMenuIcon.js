import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";

const MUIMenuIcon = () => {
    const { children, ...rest } = props;
    return <MenuIcon {...rest}>{children}</MenuIcon>
}

export default MUIMenuIcon