import React, { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import ExpenseTable from "./Expensetabale";
import IncomeTable from "./IncomeTable";
import SubscriptionsTable from "./SubscriptionsTable";

const Profile = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const {
    currentUser,
    usersSubscriptions,
    removeSubscription,
    getTotal,
    writeUserData,
    usersExpenses,
    getTotalExpenses,
    getOverallTotal,
    removeExpense,
  } = useAuth();
  const history = useHistory();

  return (
    <Box
      sx={{
        mr: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <IncomeTable />
      <SubscriptionsTable />
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 93619dcb89e92c2989caf316d7458e3e08fa21af
=======
>>>>>>> daf0c577ee4d3cc1c2443a3c74590c74745b644d
      <ExpenseTable />
    </Box>
  );
};

export default Profile;
