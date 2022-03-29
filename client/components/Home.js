import { useAuth } from "../contexts/AuthContext";
import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Box>
      <Typography variant="h3">Welcome to shoulda</Typography>
    </Box>
  );
};

export default Home;
