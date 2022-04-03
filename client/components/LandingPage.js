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
  InputAdornment,
  TextField,
  autocompleteClasses,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import PieChart from "./PieChart";

/**
 * COMPONENT
 */
export const LandingPage = () => {
  const { signup, writeUserData, currentUser, writeIncomeData } = useAuth();
  const ammountRef = useRef(0);

  const history = useHistory();

  // const generator = () => {
  //   var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  //   var string = "";
  //   for (var i = 0; i < 15; i++) {
  //     string += chars[Math.floor(Math.random() * chars.length)];
  //   }
  //   signup(`guest${string}@gmail.com`, "Password");
  //   history.push("/expense");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      uid: currentUser.uid,
      email: currentUser.email,
    };
    await writeUserData(user);
    const income = {
      name: "primary",
      ammount: ammountRef.current.value,
    };
    writeIncomeData(income);

    history.push("/expense");
  };

  return (
    <Box
      sx={{
        mr: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          margin: 0,
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
            marginTop: 5,
          }}
        />
      </Card>
      <PieChart />
      <Typography variant="h4" sx={{ fontWeight: 600, marginTop: 5 }}>
        Tired Of Wasting Your Hard Earned $$$?
      </Typography>
      <Typography variant="p" sx={{ padding: 4, lineHeight: 1.5 }}>
        We get it. You KNOW you should be managing your finances better (i.e.
        investing, tracking, plus whatever else your dad is always nagging you
        to do. But you don’t know where to start. The first step to taking care
        of your money is to understand its REAL value.
      </Typography>
      <Box
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: 800,
          alignItems: "center",
          // margin: { xs: "auto" },
        }}
      >
        <Box
          sx={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            width: 250,
            margin: { sx: "auto" },
          }}
        >
          <Typography
            variant="p"
            sx={{ padding: 4, fontStyle: "italic", margin: { sx: "auto" } }}
          >
            Ever wonder how much money you could be making if you invested your
            starbucks bill into the S&P 500?
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          OR
        </Typography>
        <Box
          sx={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            width: 250,
          }}
        >
          <Typography
            variant="p"
            sx={{ margin: { xs: "auto" }, padding: 4, fontStyle: "italic" }}
          >
            just how much those costly monthly subscriptions are ACTUALLY
            costing you?!
          </Typography>
        </Box>
      </Box>
      <Typography variant="p" sx={{ padding: 4, fontStyle: "italic" }}>
        We will do the math. BUT FIRST, answer our simple questions below so we
        can get to know you better.
      </Typography>
      <Box
        sx={{
          width: 800,
          height: 1,
          border: 0.5,
          borderColor: "lightgray",
          margin: 4,
        }}
      />
      <Typography variant="p" sx={{ padding: 4 }}>
        What is your monthly income?
      </Typography>
      <Box>
        <FormControl>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            aria-describedby="my-helper-text"
            inputRef={ammountRef}
            sx={{ border: "none" }}
          />
        </FormControl>
      </Box>

      <Button
        onClick={(e) => handleSubmit(e)}
        sx={{
          marginTop: 5,
          marginBottom: 5,
          borderWidth: 0,
          boxShadow: "3px 2px 10px darkgray",
          borderCollapse: "collapse",
          color: "black",
          borderRadius: 40,
          width: 90,
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default LandingPage;
