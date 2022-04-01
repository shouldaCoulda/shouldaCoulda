import React, { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import PopupButton from "../PopupButton";
import {
  Typography,
  Box,
  Button,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  TableBody,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import AddIncome from "../Income/AddIncome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import ExpenseTable from "./Expensetabale";
import SubscriptionTable from "./SubscriptionsTable";
import IncomeTable from "./IncomeTable";

import { styled } from "@mui/material/styles";

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
    removeExpense,
    usersIncomes,
    removeIncome,
  } = useAuth();
  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);
  return (
    <Box className="column ">
      <ExpenseTable />
      <SubscriptionTable />
      <IncomeTable />

      <AddIncome />
      <PopupButton />
    </Box>
  );
};

export default Profile;
