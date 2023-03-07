import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
    AppBar,
    Box,
    Button,
    Grid,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/images/footer-logo.png";
import "../../assets/styles/Header.css";



const Header = () => {
  const [active, setActive] = React.useState(1);

  const handleChange = (newValue) => {
    setActive(newValue);
  };
  return (
    <>
      <Box className="header-container">
        <Grid alignItems="center" container spacing={0}>
          <Grid item xs={3}>
            <Box className="header-lang-search-container">
              <Typography>EN</Typography>
              <Button>
                <SearchIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Box className="header-menus-container">
              <Box>
                <Link to="/">
                  <Button
                    onClick={() => handleChange(1)}
                    className={`header-menu-btn ${active === 1 && "activated"}`}
                    variant="text"
                  >
                    المركز الإعلامي
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(2)}
                    className={`header-menu-btn ${active === 2 && "activated"}`}
                    variant="text"
                  >
                    خدماتنا
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(3)}
                    className={`header-menu-btn ${active === 3 && "activated"}`}
                    variant="text"
                  >
                    مكتبة
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(4)}
                    className={`header-menu-btn ${active === 4 && "activated"}`}
                    variant="text"
                  >
                    عن المركز
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(5)}
                    className={`header-menu-btn ${active === 5 && "activated"}`}
                    variant="text"
                  >
                    الصفحة الرئيسية
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="header-menu-logo-container">
              <img src={headerLogo} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ResponsiveHeader />
    </>
  );
};

export default Header;

function ResponsiveHeader() {
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [active, setActive] = React.useState(1);

  const handleChange = (newValue) => {
    setActive(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 280}}
      className='responsive-header-menus'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <>
            <IconButton className='responsive-drawer-close-btn'>
                <CloseIcon />
            </IconButton>
        </>

      {/* <List>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary='header' />
            </ListItemButton>
          </ListItem>
      </List> */}
      <Box className="responsive-menus-container">
                <Link to="/">
                  <Button
                    onClick={() => handleChange(1)}
                    className={`header-menu-btn ${active === 1 && "activated"}`}
                    variant="text"
                  >
                    المركز الإعلامي
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(2)}
                    className={`header-menu-btn ${active === 2 && "activated"}`}
                    variant="text"
                  >
                    خدماتنا
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(3)}
                    className={`header-menu-btn ${active === 3 && "activated"}`}
                    variant="text"
                  >
                    مكتبة
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(4)}
                    className={`header-menu-btn ${active === 4 && "activated"}`}
                    variant="text"
                  >
                    عن المركز
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    onClick={() => handleChange(5)}
                    className={`header-menu-btn ${active === 5 && "activated"}`}
                    variant="text"
                  >
                    الصفحة الرئيسية
                  </Button>
                </Link>
            </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ py: 2 }}
          className="responsive-header-menu-container"
        >
          <Toolbar>
            {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton> */}
            <Box className="header-lang-search-container">
              <Typography>EN</Typography>
              <Button>
                <SearchIcon />
              </Button>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <div>
              <IconButton
              onClick={toggleDrawer("right", true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <>
        <Drawer
        className='responsive-drawer'
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </>
    </>
  );
}
