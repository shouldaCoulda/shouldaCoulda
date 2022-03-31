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
  // let iconRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeOtherExpenseData(
      nameRef.current.value,
      priceRef.current.value,
      // iconRef.current.value,
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
          display: { xs: "none", md: "flex" },
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          Would you like to add other expenses?
        </Typography>
        <ExpenseCard />
        <Button
          onClick={() => history.push("/selections")}
          sx={{
            marginTop: 5,
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
    </>
  );
};

export default AddExpense;
