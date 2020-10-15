import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button, Container } from "@material-ui/core";
import Logo from "../../../../images/logo.png";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: "160px",
  },
  custombtn: {
    padding: "10px 36px",
    margin: "0 12px",
  },
  navItem: {
    margin: "0 14px"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory()
  const user = useState(JSON.parse(localStorage.getItem('userInfo')))[0]
    const setPath = () => {
        user && user.role ? history.push('/serviceall') : history.push('/order')
    }
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="default" onClick={() => history.push('/')}>Home</Button>
      </MenuItem>
      <MenuItem>
        <Button color="default">donation</Button>
      </MenuItem>
      <MenuItem>
        <Button color="default" onClick={() => history.push('/event')}>events</Button>
      </MenuItem>
      <MenuItem>
        <Button color="default">blog</Button>
      </MenuItem>
      <MenuItem>
        <Button
          color="default"
          className={classes.custombtn}
          style={{ background: "#434141" }}
          onClick={setPath}
        >
          Login
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <div className={classes.logo}>
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button className={classes.navItem} color="default" onClick={() => history.push('/')}>Home</Button>
              <Button className={classes.navItem} color="default">donation</Button>
              <Button className={classes.navItem} color="default" onClick={() => history.push('#contact')}>events</Button>
              <Button className={classes.navItem} color="default">blog</Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.custombtn}
                onClick={setPath}
              >
                Login
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navbar;