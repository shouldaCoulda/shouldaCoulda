import React, { useRef } from "react";
import { useOtherExpenses }from "../contexts/OtherExpContext"
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
  CardMedia
} from "@mui/material"

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
      <h1>Would you like to add other potentially unnessasary expenses?</h1>
        <h2>Think about what you spent last month that you could have avoided or could be reduced in future months</h2>
        <h3>Feel free to take a guess or take a look at your recent account statements</h3>
        <h3>Now take a look below at the list below and check any that you'd like to add an expense to</h3>
      <TextField
  //       InputProps={{
  //         inputComponent: MyInputComponent,
  //         inputProps: {
  //           component: SomeThirdPartyComponent,
  //   },
  // }}
/>;
      <Link to="/chart">
        <button>continue</button>
      </Link>
    </div>
  );
};

export default AddExpense;
