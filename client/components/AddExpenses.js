import React, { useRef } from "react";
import { useOtherExpenses }from "../contexts/OtherExpContext";
import FoodCard from "./OtherExpCards/Food";
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
    <div>
      <h1>Would you like to add other expenses?</h1>
      <h2>Everyone is unique and has different feelings on what expenses they are willing to cut back on.</h2>
      <h3>Below are some common expenses that add up over time and you may be able to reduce</h3>
      <FoodCard />
      <Link to="/chart">
        <button>continue</button>
      </Link>
    </div>
  );
};

export default AddExpense;
