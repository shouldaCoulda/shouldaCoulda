import { useAuth } from "../contexts/AuthContext";
import React, { useEffect } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";

/**
 * COMPONENT
 */
export const LandingPage = () => {
  const { signup, writeUserData } = useAuth();

  const history = useHistory();

  const generator = () => {
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var string = "";
    for (var i = 0; i < 15; i++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    signup(`guest${string}@gmail.com`, "Password");
    history.push("/");
  };

  //   useEffect(() => {
  //     generator();
  //   }, []);

  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Card
        sx={{
          maxWidth: 700,
          margin: 2,
          padding: 0,
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          src={
            "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          }
          alt="green iguana"
          sx={{
            height: 255,
            width: 600,
          }}
        />
      </Card>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Tired Of Wasting Your Hard Earned $$$?
      </Typography>

      <Button onClick={() => generator()}>Next</Button>
    </Box>
  );
};

export default LandingPage;
