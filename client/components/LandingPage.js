import { useAuth } from "../contexts/AuthContext";
import React, { useEffect, useRef } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";

/**
 * COMPONENT
 */
export const LandingPage = () => {
  const { signup, writeUserData } = useAuth();
  const ammountRef = useRef(0);

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
  function handleSubmit() {
    console.log("submit", ammountRef.current.value);
    generator();
  }

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
        paddingBottom: 20,
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
      <Typography variant="p" sx={{ padding: 4, lineHeight: 1.5 }}>
        We get it. You KNOW you should be managing your finances better (i.e.
        investing, tracking, plus whatever else your dad is always nagging you
        to do. But you don’t know where to start. The first step to taking care
        of your money is to understand its REAL value.
      </Typography>
      <Typography variant="p" sx={{ padding: 4 }}>
        Ever wonder how much money you could be making if you invested your
        starbucks bill into the S&P 500?
      </Typography>
      <Typography variant="h4" sx={{ padding: 4 }}>
        OR
      </Typography>
      <Typography variant="p" sx={{ padding: 4 }}>
        just how much those costly monthly subscriptions are ACTUALLY costing
        you?!
      </Typography>
      <Typography variant="h6" sx={{ padding: 4 }}>
        We will do the math.
      </Typography>
      <Typography variant="p" sx={{ padding: 4 }}>
        BUT FIRST, answer our simple questions below so we can get to know you
        better.
      </Typography>
      <Typography variant="p" sx={{ padding: 4 }}>
        Question 1: How much money do you make every month?
      </Typography>
      <Box>
        <FormControl>
          <InputLabel htmlFor="ammount">Ammount</InputLabel>
          <Input aria-describedby="my-helper-text" inputRef={ammountRef} />
          <FormHelperText>Monthly net income:</FormHelperText>
        </FormControl>
      </Box>
      <Typography variant="p" sx={{ padding: 4 }}>
        Question 2: Are you ready to see how much your is really costing you?
        Insert radio box here: answers are either YES! or I’M READY
      </Typography>
      <Button onClick={handleSubmit}>yes</Button>

      <Button onClick={handleSubmit}>im ready</Button>
    </Box>
  );
};

export default LandingPage;
