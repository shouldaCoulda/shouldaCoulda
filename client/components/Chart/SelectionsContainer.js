import React from "react";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography } from "@mui/material";
import PopupButton from "../PopupButton";

const SelectionsContainer = () => {
  const { getTotal, months } = useChart();
  const total = (getTotal() * months).toFixed(2);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: 1 }}>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontSize: { xs: 10, sm: 12, md: 18 } }}
      >
        Monthly Total: {getTotal().toFixed(2)}
      </Typography>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontSize: { xs: 10, sm: 12, md: 18 } }}
      >
        {months} month total: {total}
      </Typography>
    </Box>
  );
};

export default SelectionsContainer;
