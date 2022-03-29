import { useAuth } from "../contexts/AuthContext";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
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

  useEffect(() => {
    generator();
  }, []);

  return (
    <Box>
      <Typography variant="h3">Landing page</Typography>
    </Box>
  );
};

export default LandingPage;
