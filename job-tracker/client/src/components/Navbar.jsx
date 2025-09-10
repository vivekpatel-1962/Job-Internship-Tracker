import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Switch,
  FormControlLabel,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LoginIcon from '@mui/icons-material/Login';
const pages = ['Dashboard', 'Profile'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


// Custom Toggle Switch Component
const ThemeToggle = ({ darkMode, toggleTheme }) => {
  const theme = useTheme();
  
  return (
    <Box
      onClick={toggleTheme}
      sx={{
        width: 60,
        height: 30,
        backgroundColor: darkMode ? 'primary.main' : 'grey.300',
        borderRadius: 15,
        padding: '3px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          opacity: 0.8,
        },
      }}
    >
      <Box
        sx={{
          width: 24,
          height: 24,
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: darkMode ? 'translateX(30px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        {darkMode ? (
          <NightlightRoundIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
        ) : (
          <WbSunnyIcon sx={{ fontSize: 16, color: theme.palette.grey[600] }} />
        )}
      </Box>
    </Box>
  );
};

function Navbar({ darkMode, toggleTheme }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();

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

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            JobTracker
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <RouterLink
                      to={`/${page.toLowerCase()}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {page}
                    </RouterLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile screens */}
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            JobTracker
          </Typography>

          {/* Theme toggle - Visible on both mobile and desktop */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', mr: 2 }}>
            <Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
              <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            </Tooltip>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={RouterLink}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Login and User menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              color="primary"
              startIcon={<LoginIcon />}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                px: 3,
              }}
            >
              Login
            </Button>

            {/* User menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt="User Avatar" 
                    src="/static/images/avatar/2.jpg"
                    sx={{ 
                      border: `2px solid ${theme.palette.primary.main}`,
                      width: 40,
                      height: 40,
                    }}
                  />
                </IconButton>
              </Tooltip>
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
