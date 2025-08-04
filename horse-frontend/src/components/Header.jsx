import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar, Box, Toolbar, IconButton, Typography, Menu,
    Container, Avatar, Button, Tooltip, MenuItem, ListItemIcon, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableViewIcon from '@mui/icons-material/TableView';   

const pages = [
    { name: 'Card', path: '/', icon: <ViewModuleIcon /> },
    { name: 'Table', path: '/table', icon: <TableViewIcon /> },
];
const settings = ['Profile', 'Account', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const location = useLocation();

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <AppBar position="static" elevation ={0} sx={{ pl: 3, pt: 1, bgcolor: 'inherit' }}>
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
                            {/* 3. Update Mobile Menu to show icon and text */}
                            {pages.map((page) => (
                                <MenuItem 
                                    key={page.name} 
                                    component={RouterLink} 
                                    to={page.path} 
                                    onClick={handleCloseNavMenu}
                                    selected={location.pathname === page.path}
                                >
                                    <ListItemIcon>{page.icon}</ListItemIcon>
                                    <ListItemText>{page.name}</ListItemText>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5" noWrap component={RouterLink} to="/"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none' }}
                    >
                        HORSE TRACKER
                    </Typography>
                    
                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* 4. Update Desktop Menu to show icons with tooltips */}
                        {pages.map((page) => {
                            const isActive = location.pathname === page.path;
                            return (
                                <Tooltip title={page.name} key={page.name}>
                                    <IconButton
                                        component={RouterLink}
                                        to={page.path}
                                        sx={{ 
                                            mx: 1, 
                                            color: isActive ? 'black' : 'grey',
                                            '&:hover': {
                                                color: 'black',
                                                bgcolor: 'action.hover'
                                            }
                                        }}
                                    >
                                        {page.icon}
                                    </IconButton>
                                </Tooltip>
                            );
                        })}
                    </Box>

                    {/* User settings menu */}
                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User" />
                            </IconButton>
                        </Tooltip>
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
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;