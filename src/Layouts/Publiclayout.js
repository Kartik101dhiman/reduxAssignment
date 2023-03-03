import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MUIBox,
    MUIButton,
    MUITypography,
    MUIAppBar,
    MUIToolBar,
    MUIMenu,
    MUIContainer,
    MUIMenuItem,
    MUIIconButton
 } from "../Component/MUIcomponent";
import { AdbIcon,MenuIcon } from "../Component/Icons/Icons";






const settings = [
    { label: "Login", path: "/login" },
    { label: "Signup", path: "/signup" },
];

const Publiclayout = ({ children }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
   

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

   
    return (
        <MUIBox className="publiclayoutcontainer">
            <MUIAppBar position="static">
                <MUIContainer maxWidth="xl">
                    <MUIToolBar disableGutters>
                        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                        <MUITypography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: "none", md: "flex" },
                            }}
                            className="logo"
                        >
                            LOGO
                        </MUITypography>

                        <MUIBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <MUIIconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </MUIIconButton>
                            <MUIMenu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {settings.map((page) => (
                                    <MUIMenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link to={page.path}>
                                            <MUITypography textAlign="center" className="headerlink">
                                                {page.label}
                                            </MUITypography>
                                        </Link>
                                    </MUIMenuItem>
                                ))}
                            </MUIMenu>
                        </MUIBox>
                        <AdbIcon
                            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 1 }}
                        />
                        <MUITypography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                            }}
                            className="logo"
                        >
                            LOGO
                        </MUITypography>
                        <MUIBox
                        className="headerlinkContainer"
                            sx={{
                                display: { xs: "none"},
                       
                            }}
                        >
                            {settings.map((page) => (
                                <MUIButton
                                    className="headerlink"
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link to={page.path}> {page.label}</Link>
                                </MUIButton>
                            ))}
                        </MUIBox>
                    </MUIToolBar>
                </MUIContainer>
            </MUIAppBar>
            <MUIBox className="publicLayoutChildren">{children}</MUIBox>
        </MUIBox>
    );
};

export default Publiclayout;
