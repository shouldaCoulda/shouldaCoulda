import React, { useRef } from "react";
import { useOtherExpenses }from "../contexts/OtherExpContext";
import FoodCard from "./OtherExpCards/Food";
import CableCard from "./OtherExpCards/Cable";
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
    writeOtherExpenseData(nameRef.current.value, priceRef.current.value, currentUser.uid);
  };

  const write = (e) => {
    e.preventDefault();
    var user = {
      uid: currentUser.uid,
      email: currentUser.email,
    };
    writeUserData(user);
  };

  const expenses = [
    "Coffee",
    "Food Delivery",
    "Tobacco",
    "Alcohol",
    "Cable TV"
  ]

  return (
    <>
    <Box sx={{ ml: 2, mr: 2, display: { xs: "none", md: "flex" }, flexWrap: "wrap" }}>
      {/* <h3>Would you like to add other expenses?</h3>
      <h4>Everyone is unique and has different feelings on what expenses they are willing to cut back on.</h4>
      <h4>Below are some common expenses that add up over time and you may be able to reduce</h4> */}
      <Box sx={{ ml: 1, mr: 1 }}><FoodCard /></Box>
      <Box sx={{ ml: 1, mr: 1 }}><CableCard /></Box>
    </Box>
    <Link to="/chart">
        <button>continue</button>
      </Link>
    </>
  );
};

export default AddExpense;
