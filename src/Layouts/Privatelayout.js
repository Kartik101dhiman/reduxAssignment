import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

// import {
//     openSnake,
   
// } from "../Store/Reducer";
import { openSnake } from '../Store/Reducer/Snackbar';


import { MenuIcon, CommentIcon, AdbIcon, InboxIcon } from "../Component/Icons/Icons";
import {
    MUIAppBar,
    MUIToolBar,
    MUIIconButton,
    MUIMenu,
    MUIContainer,
    MUIAvatar,
    MUITooltip,
    MUIMenuItem,
    MUITypography,
    MUIBox,
    MUIButton,
    MUIGrid,
    MUIList,
    MUIListItem,
    MUIListItemButton,
    MUIListItemIcon,
    MUIListItemText,
} from "../Component/MUIcomponent";


const pages = [
    { label: "Users", path: "/users" },
    { label: "Posts" },
    { label: "Comments" },
    { label: "Albums" },
];
const settings = ["Profile", "Change Password"];

function Privatelayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logoutUser = () => {
        localStorage.clear();
        dispatch(
            openSnake({
                Openbar: true,
                severity: "success",
                message: "Logout successfully",
            })
        );
        navigate('/login');
    }


    return (
        <MUIBox>
            <MUIAppBar position="static">
                <MUIContainer maxWidth="xl">
                    <MUIToolBar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <MUITypography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            className="logo"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                               
                            }}
                        >
                            LOGO
                        </MUITypography>

                        <MUIBox sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MUIMenuItem key={page.label} onClick={handleCloseNavMenu}>
                                        <MUITypography textAlign="center">{page.label}</MUITypography>
                                    </MUIMenuItem>
                                ))}
                            </Menu>
                        </MUIBox>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <MUITypography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            className="logo"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                
                            }}
                        >
                            LOGO
                        </MUITypography>
                        <MUIBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <MUIButton
                                    key={page.label}
                                    onClick={handleCloseNavMenu}
                                    className="linkButtonContainer"
                                >
                                    <Link to={page.path} className="linkbar">
                                        {page.label}
                                    </Link>
                                </MUIButton>
                            ))}
                        </MUIBox>

                        <MUIBox sx={{ flexGrow: 0 }}>
                            <MUITooltip title="Open settings">
                                <MUIIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <MUIAvatar alt="Remy Sharp" src="https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg" />
                                </MUIIconButton>
                            </MUITooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MUIMenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <MUITypography textAlign="center">{setting}</MUITypography>
                                    </MUIMenuItem>
                                ))}
                                <MUIMenuItem key="logout" onClick={logoutUser}>
                                    <MUITypography textAlign="center">Logout</MUITypography>
                                </MUIMenuItem>
                            </Menu>
                        </MUIBox>
                    </MUIToolBar>
                </MUIContainer>
            </MUIAppBar>
            <MUIBox>
                <MUIGrid Container className="flex">
                    <MUIGrid item md={4}>
                        <MUIBox role="presentation" className="sidebarlist">
                            <MUIList className="sidebarlistChild">
                                <MUIListItem key="dashboard" disablePadding>
                                    <MUIListItemButton className="listitembutton">
                                        <MUIListItemIcon>
                                            <CommentIcon />
                                        </MUIListItemIcon>
                                        <Link to="/dashboard" className="linkbar">
                                            <MUIListItemText className="linkbar">Dashboard</MUIListItemText>
                                        </Link>
                                    </MUIListItemButton>
                                </MUIListItem>
                                {pages.map((pages, index) => (
                                    <MUIListItem key={pages.label} disablePadding>
                                        <MUIListItemButton className="listitembutton">
                                            <MUIListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <CommentIcon />}
                                            </MUIListItemIcon>
                                            {
                                                <Link to={pages.path} className="linkbar">
                                                    <MUIListItemText primary={pages.label} />
                                                </Link>
                                            }
                                        </MUIListItemButton>
                                    </MUIListItem>
                                ))}
                            </MUIList>
                        </MUIBox>
                    </MUIGrid>
                    <MUIGrid item md={8} className="privatechildren">
                        {children}
                    </MUIGrid>
                </MUIGrid>
            </MUIBox>
        </MUIBox>
    );
}
export default Privatelayout;


