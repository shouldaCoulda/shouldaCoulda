import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LoginIcon from "@mui/icons-material/Login";
const Navbar = () => {
  //we take in logout and current user so our navbar can display accuratley
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  return (
    // <>
    <AppBar position="static">
      <Container
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h6" noWrap component="div">
          <img src="/logo.png" alt="image" className="logo" />
        </Typography>
        {currentUser ? (
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              width: 300,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./")}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <HomeIcon sx={{ fontSize: 40 }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./profile")}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <AccountBoxIcon sx={{ fontSize: 40 }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./chart")}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <ShowChartIcon sx={{ fontSize: 40 }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={logout}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <LogoutIcon sx={{ fontSize: 40 }} />
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./login")}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <LoginIcon sx={{ fontSize: 40 }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./signup")}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Sign Up
            </Typography>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
