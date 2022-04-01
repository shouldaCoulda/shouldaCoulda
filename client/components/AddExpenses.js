import React, { useRef } from "react";
import { useOtherExpenses } from "../contexts/OtherExpContext";
import ExpenseCard from "./OtherExpCards/ExpenseCard";
import { useAuth } from "../contexts/AuthContext";
import { Box, Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
const AddExpense = () => {
  const history = useHistory();
  const { writeOtherExpenseData } = useOtherExpenses();
  const { writeUserData, currentUser } = useAuth();
  let nameRef = useRef("");
  let priceRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeOtherExpenseData(
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
    <>
      <Box
        sx={{
          ml: 2,
          mr: 2,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, marginTop: 10, marginBottom: 4 }}
        >
          Let's add up your unnecessary expenses ...{" "}
        </Typography>
        <ExpenseCard />
      </Box>
    </>
  );
};
export default AddExpense;
