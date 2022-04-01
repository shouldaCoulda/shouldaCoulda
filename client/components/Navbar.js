import { autocompleteClasses, Button } from "@mui/material";
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
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        border: "none",
        boxShadow: "none",
        borderBottom: 0.5,
        borderColor: "black",
      }}
    >
      <Container
        sx={{
          mr: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center", md: "flex-end" },
        }}
      >
        <Typography variant="h6" noWrap component="div">
          <img src="/logo.png" alt="image" className="logo" />
        </Typography>
        {currentUser ? (
          <Box
            sx={{
              mr: 2,
              display: "flex",
              width: 300,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./")}
              sx={{ mr: 2, display: "flex" }}
            >
              <HomeIcon sx={{ fontSize: 40, color: "lightblue" }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./profile")}
              sx={{ mr: 2, display: "flex" }}
            >
              <AccountBoxIcon sx={{ fontSize: 40, color: "lightblue" }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => history.push("./chart")}
              sx={{ mr: 2, display: "flex" }}
            >
              <ShowChartIcon sx={{ fontSize: 40, color: "lightblue" }} />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={logout}
              sx={{ mr: 2, display: "flex" }}
            >
              <LogoutIcon sx={{ fontSize: 40, color: "lightblue" }} />
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mr: 2, display: "flex" }}></Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
