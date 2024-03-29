import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Footer = () => {
  //we take in logout and current user so our navbar can display accuratley
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  return (
    // <>
    <AppBar
      position="fixed"
      display="flex"
      sx={{
        top: "auto",
        bottom: 0,
        height: 100,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          color: red,
          width: 125,
          padding: 1,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 0.5,
          }}
        >
          Shoulda Coulda{" "}
        </Typography>
        <Typography variant="p" sx={{ fontSize: 11 }}>
          We're on a mission to show people the real value of their $
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "left",

          padding: 1,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 0.5,
          }}
        >
          Explore
        </Typography>
        <Typography
          variant="p"
          onClick={() => history.push("/about")}
          sx={{ fontSize: 11 }}
        >
          About
        </Typography>
        <Typography
          variant="p"
          onClick={() => history.push("/team")}
          sx={{ fontSize: 11 }}
        >
          Meet the team
        </Typography>
      </Box>

      <Box
        sx={{
          padding: 1,

          display: "flex",
          flexDirection: "column",
          // alignItems: "right",
          padding: 1,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 0.5,
          }}
        >
          More
        </Typography>
        <Typography variant="p" noWrap component="div" sx={{ fontSize: 12 }}>
          Questions? Contact Us
        </Typography>
        {currentUser ? (
          <Box></Box>
        ) : (
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{ fontSize: 12 }}
            onClick={() => history.push("/login")}
          >
            Already a user? sign in
          </Typography>
        )}
      </Box>
    </AppBar>
  );
};

export default Footer;
