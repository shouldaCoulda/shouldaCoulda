import React, { useRef } from "react";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";
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

const AddSubscription = () => {
  const { writeSubscriptionData } = useSubscription();
  const { writeUserData, currentUser } = useAuth();
  let nameRef = useRef("");
  let priceRef = useRef();

  const handleSubmit = async (e) => {
    console.log(nameRef.current.value);
    e.preventDefault();
    writeSubscriptionData(
      nameRef.current.value,
      priceRef.current.value,
      currentUser.uid
    );
  };
  const write = (e) => {
    e.preventDefault();
    var user = {
      uid: currentUser.uid,
      email: currentUser.email,
    };
    writeUserData(user);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor="Name">Name</InputLabel>
        <Input aria-describedby="my-helper-text" inputRef={nameRef} />
        <FormHelperText>Name of your subscription:</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="Price">Price</InputLabel>
        <Input aria-describedby="my-helper-text" inputRef={priceRef} />
        <FormHelperText>monthly cost:</FormHelperText>
      </FormControl>
      <Button onClick={handleSubmit}>submit</Button>
    </Box>
  );
};

export default AddSubscription;
