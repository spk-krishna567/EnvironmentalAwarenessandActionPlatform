// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/authActions";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.auth);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Env Awareness Platform
          </Link>
        </Typography>
        {userInfo ? (
          <div>
            <Button color="inherit" component={Link} to="/createinitiative">
              Create Initiative
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(null)}
              onClose={logoutHandler}
            >
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={logoutHandler}
              color="inherit"
            >
              <Avatar alt={userInfo.name} src="/static/images/avatar/1.jpg" />
            </IconButton>
          </div>
        ) : (
          <div>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
