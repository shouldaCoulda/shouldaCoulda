import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";

const Footer = () => {
  //we take in logout and current user so our navbar can display accuratley
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  return (
    // <>
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        height: 100,
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingLeft: 3,
        paddingRight: 3,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexWrap: "wrap",
          alignItems: "center",
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
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "left",

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
        <Typography variant="p" sx={{ fontSize: 11 }}>
          About
        </Typography>
        <Typography variant="p" sx={{ fontSize: 11 }}>
          Meet the team
        </Typography>
      </Box>
      {currentUser ? (
        <>
          <Box
            sx={{
              padding: 1,

              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "right",
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
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ fontSize: 12 }}
            >
              questions?
            </Typography>
            <Button
              sx={{ color: "white" }}
              onClick={() => console.log("enter form data here")}
            >
              {" "}
              Contact Us
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              padding: 1,

              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "right",
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
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ fontSize: 12 }}
            >
              Already a user? sign in
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ fontSize: 12 }}
            >
              Questions? Contact Us
            </Typography>
          </Box>
        </>
      )}
    </AppBar>
  );
};

export default Footer;
