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
    <Box>
      <Typography variant="h3">Landing page</Typography>
      <Typography variant="h3">Already a user ? </Typography>
      <Button onClick={() => generator()}>continue as a guest</Button>
    </Box>
  );
};

export default LandingPage;
