import React, { useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import TvIcon from "@mui/icons-material/Tv";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import LiquorIcon from "@mui/icons-material/Liquor";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ExpenseTable from "./Profile/Expensetabale";
import IncomeTable from "./Profile/IncomeTable";
import SubscriptionsTable from "./Profile/SubscriptionsTable";

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
      <SubscriptionsTable />
      <IncomeTable />
      <ExpenseTable />
    </Box>
  );
};

export default Profile;
