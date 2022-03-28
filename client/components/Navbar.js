import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
  //we take in logout and current user so our navbar can display accuratley
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img src="/logo.png" alt="image" className="logo" />
            </Typography>
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={() => history.push("./selections")}
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={() => history.push("./profile")}
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Profile
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={() => history.push("./chart")}
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Chart
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <nav>
          <div className="navOptions">
            {currentUser ? (
              <>
                <Link to="/selections" className="navItem ">
                  HOME
                </Link>
                <Link to="/profile" className="navItem ">
                  PROFILE
                </Link>
                <Link to="/chart" className="navItem ">
                  CHART
                </Link>
                <button className="logoutButton" onClick={logout}>
                  LOG OUT
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="navItem ">
                  login
                </Link>
                <Link to="/signUp" className="navItem ">
                  sign-up
                </Link>
              </>
            )}
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
