import React, { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import PopupButton from "../PopupButton";
import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import AddIncome from "../Income/AddIncome";

import ExpenseTable from "./Expensetabale";
import SubscriptionTable from "./SubscriptionsTable";
import IncomeTable from "./IncomeTable";

const Profile = () => {
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
