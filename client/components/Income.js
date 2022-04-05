import React, { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {
  Typography,
  FormControl,
  Box,
  Card,
  CardMedia,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
const Income = () => {
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
        m: { xs: 4, md: 12, lg: 20 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
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

export default Income;
