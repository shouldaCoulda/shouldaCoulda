import React, { useRef } from "react";
import { useOtherExpenses }from "../contexts/OtherExpContext";
import FoodCard from "./OtherExpCards/Food";
import CableCard from "./OtherExpCards/Cable";
import TobaccoCard from "./OtherExpCards/Tobacco";
import AlcoholCard from "./OtherExpCards/Alcohol";
import CoffeeCard from "./OtherExpCards/Coffee";
import MiscCard from "./OtherExpCards/Misc";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  Container,
  TextField,
  Box,
  Card,
  Button,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  InputAdornment
} from "@mui/material";

const AddExpense = () => {
  const { writeOtherExpenseData } = useOtherExpenses();
  const { writeUserData, currentUser } = useAuth();
  let nameRef = useRef("");
  let priceRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeOtherExpenseData(
      nameRef.current.value,
      priceRef.current.value,
      currentUser.uid);
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
    <>
    <div>Would you like to add other expenses?</div>
    <Box sx={{ ml: 2, mr: 2, display: { xs: "none", md: "flex" }, flexWrap: "wrap" }}>
      <Box sx={{ ml: 1, mr: 1 }}><FoodCard /></Box>
      <Box sx={{ ml: 1, mr: 1 }}><CableCard /></Box>
      <Box sx={{ ml: 1, mr: 1 }}><TobaccoCard /></Box>
      <Box sx={{ ml: 1, mr: 1 }}><AlcoholCard /></Box>
      <Box sx={{ ml: 1, mr: 1 }}><CoffeeCard /></Box>
      <Box sx={{ ml: 1, mr: 1 }}><MiscCard /></Box>
    </Box>
    <Link to="/chart">
        <button>continue</button>
      </Link>
    </>
  );
};

export default AddExpense;
