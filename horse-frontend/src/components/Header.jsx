import React, { useState, useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Menu,
    Container, Avatar, Tooltip, MenuItem, ListItemIcon, 
    ListItemText, Badge
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableViewIcon from '@mui/icons-material/TableView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { OverdueNotificationDialog } from './OverdueNotificationDialog';

const pages = [
    { name: 'Card', path: '/', icon: <ViewModuleIcon /> },
    { name: 'Table', path: '/table', icon: <TableViewIcon /> },
];
const settings = ['Profile', 'Account', 'Logout'];

function Header({ horses }) { 
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isNotificationDialogOpen, setNotificationDialogOpen] = useState(false);
    const location = useLocation();

    const overdueCount = useMemo(() => {
        if (!horses || horses.length === 0) return 0;
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        return horses.filter(horse => new Date(horse.lastVetCheck) < sixMonthsAgo).length;
    }, [horses]);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ bgcolor: 'inherit' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6" noWrap component={RouterLink} to="/"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 700, color: 'black', textDecoration: 'none' }}
                        >
                            Horsey
                        </Typography>

                        {/* Mobile Menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar" anchorEl={anchorElNav}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem 
                                        key={page.name} 
                                        component={RouterLink} 
                                        to={page.path} 
                                        onClick={handleCloseNavMenu}
                                    >
                                        <ListItemIcon>{page.icon}</ListItemIcon>
                                        <ListItemText>{page.name}</ListItemText>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        
                        <Typography
                            variant="h5" noWrap component={RouterLink} to="/"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none' }}
                        >
                            HORSE TRACKER
                        </Typography>
                        
                        {/* Desktop Menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Tooltip title={page.name} key={page.name}>
                                    <IconButton
                                        component={RouterLink}
                                        to={page.path}
                                        sx={{ 
                                            mx: 1, 
                                            color: location.pathname === page.path ? 'black' : 'grey',
                                            '&:hover': {
                                                color: 'white',
                                                bgcolor: 'action.hover'
                                            }
                                        }}
                                    >
                                        {page.icon}
                                    </IconButton>
                                </Tooltip>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Tooltip title="Notifications">
                                <IconButton onClick={() => setNotificationDialogOpen(true)} color="inherit">
                                    <Badge badgeContent={overdueCount} color="error">
                                        <NotificationsIcon sx={{color: "black"}}/>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            {/* <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="User" />
                                </IconButton>
                            </Tooltip> */}
                            <Menu
                                sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <OverdueNotificationDialog
                open={isNotificationDialogOpen}
                onClose={() => setNotificationDialogOpen(false)}
                horses={horses}
            />
        </>
    );
}
export default Header;