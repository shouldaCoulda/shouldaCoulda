import React, { useEffect } from "react";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography } from "@mui/material";
import PopupButton from "../PopupButton";
import { useAuth } from "../../contexts/AuthContext";
const SelectionsContainer = () => {
  const { getTotal, months } = useChart();
  const { usersTotalIncomeAndExpenses, setUsersTotalIncomeAndExpenses } =
    useAuth();
  const total = (usersTotalIncomeAndExpenses * months).toFixed(2);

  return (
    <Box sx={{ padding: 1 }}>
      <Typography gutterBottom variant="p" component="div">
        monthly: {usersTotalIncomeAndExpenses}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        {months}: month total: {total}
      </Typography>
      <PopupButton />
    </Box>
  );
};

export default SelectionsContainer;
