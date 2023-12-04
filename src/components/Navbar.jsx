import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { PublicLinks, authLinks} from '../util/links.js'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authStore } from '../store/authStore.js';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [links,setLinks]=useState([]);

  const {user,setUser}=authStore(state=>state);

  const navigate=useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const logout=()=> {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

  useEffect(()=> {
    if(user) {
      setLinks(authLinks);
    }else {
      setLinks(PublicLinks);
    }
    
  },[user?.email])

  return (
    <AppBar position="sticky" sx={{backgroundColor:'rgb(80, 80, 80)'}}>
      <Container maxWidth="xl" sx={{height:50}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 700,
              textDecoration: 'none',
              ml:6,
              mb:2
            }}
          >
            <Link to='/'>Instanthyre</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end', mr:6}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{mb:2}} />
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
                display: { xs: 'block', md: 'none'},
              }}
            >
              {links.map((page) => (
                <Link to={page.to} key={page.id}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontSize={12} textTransform='uppercase'>
                    <span>{page.name}</span>
                  </Typography>
                </MenuItem>
                </Link>
              ))}
              {user&&
              <MenuItem onClick={logout}>
                <Typography textAlign="center" fontSize={12} textTransform='uppercase'>
                <span>Sign out</span>
                </Typography>
              </MenuItem>
              }
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end', mr:6 }}>
            {links.map((page) => (
              <Link to={page.to} key={page.id}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{color: 'white', display: 'block', mb:2, fontSize:12, paddingX:2}}
              >
                <span>{page.name}</span>
              </Button>
              </Link>
            ))}
            {
              user&&
              <Button
                onClick={logout}
                sx={{color: 'white', display: 'block', mb:2, fontSize:12, paddingX:2 }}
              >
                <span>Sign Out</span>
              </Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
