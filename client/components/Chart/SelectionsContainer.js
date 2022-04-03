import React, { useEffect } from "react";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography } from "@mui/material";
import PopupButton from "../PopupButton";
import { positions } from "@mui/system";

import { useAuth } from "../../contexts/AuthContext";
const SelectionsContainer = () => {
  const { getTotal, months } = useChart();
  const { usersTotalIncomeAndExpenses, setUsersTotalIncomeAndExpenses } =
    useAuth();
  const total = (usersTotalIncomeAndExpenses * months).toFixed(2);

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontSize: { xs: 12, md: 16 }, justifyContent: "center" }}
      >
        Monthly Total: {getTotal().toFixed(2)}
      </Typography>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ position: "right", fontSize: { xs: 12, md: 16 } }}
      >
        {months} month total: {total}
      </Typography>
    </Box>
  );
};

export default SelectionsContainer;
