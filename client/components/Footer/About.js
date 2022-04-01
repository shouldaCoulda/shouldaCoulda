import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box className="column" sx={{ marginTop: "20%" }}>
      <Box sx={{ margin: 4 }}>
        <Typography varient="h1">about</Typography>
      </Box>
      <Typography varient="p">
        Tired Of Wasting Your Hard Earned $$$? We get it. You KNOW you should be
        managing your finances better (i.e. investing, tracking, plus whatever
        else your dad is always nagging you to do. But you don’t know where to
        start. The first step to taking care of your money is to understand its
        REAL value. Ever wonder how much money you could be making if you
        invested your starbucks bill into the S&P 500? just how much those
        costly monthly subscriptions are ACTUALLY costing you?! Spend less money
        on nonsense and invest more with this app!
      </Typography>
    </Box>
  );
};
export default About;
