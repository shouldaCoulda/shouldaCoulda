import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
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
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

const AddIncome = () => {
  const { writeIncomeData, currentUser } = useAuth();
  let nameRef = useRef("");
  let ammountRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const income = {
      name: nameRef.current.value,
      ammount: ammountRef.current.value,
    };
    writeIncomeData(income);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor="Name">Name</InputLabel>
        <Input aria-describedby="my-helper-text" inputRef={nameRef} />
        <FormHelperText>Name of your Income:</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="Price">Ammount</InputLabel>
        <Input aria-describedby="my-helper-text" inputRef={ammountRef} />
        <FormHelperText>monthly ammount:</FormHelperText>
      </FormControl>
      <Button onClick={handleSubmit}>submit</Button>
    </Box>
  );
};

export default AddIncome;
