import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material";

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
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={logout}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Logout
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
              Login
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

    //  <div>
    //   <nav>
    //     <div className="navOptions">
    //       {currentUser ? (
    //         <>
    //           <Link to="/selections" className="navItem ">
    //             HOME
    //           </Link>
    //           <Link to="/profile" className="navItem ">
    //             PROFILE
    //           </Link>
    //           <Link to="/chart" className="navItem ">
    //             CHART
    //           </Link>
    //           <button className="logoutButton" onClick={logout}>
    //             LOG OUT
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link to="/login" className="navItem ">
    //             login
    //           </Link>
    //           <Link to="/signUp" className="navItem ">
    //             sign-up
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </nav>
    //   <hr />
    // </div>
    // </>
  );
};

export default Navbar;
