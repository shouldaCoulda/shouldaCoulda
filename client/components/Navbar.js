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
              paddingBottom: 2,
              paddingLeft: 2,
            }}
          >
            <Typography onClick={() => history.push("./")}>
              <HomeIcon sx={{ fontSize: 40, color: "#3e87cf" }} />
            </Typography>
            <Typography onClick={() => history.push("./profile")}>
              <AccountBoxIcon sx={{ fontSize: 40, color: "#3e87cf" }} />
            </Typography>
            <Typography onClick={() => history.push("./chart")}>
              <ShowChartIcon sx={{ fontSize: 40, color: "#3e87cf" }} />
            </Typography>
            <Typography onClick={logout}>
              <LogoutIcon sx={{ fontSize: 40, color: "#3e87cf" }} />
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
