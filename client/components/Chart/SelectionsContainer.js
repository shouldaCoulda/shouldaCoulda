import React from "react";
import { useChart } from "../../contexts/ChartContext";
import AddButton from "./AddButton";
import { Box, Typography } from "@mui/material";

const SelectionsContainer = () => {
  const { getTotal, months } = useChart();
  const total = (getTotal() * months).toFixed(2);

  return (
    <Box sx={{ padding: 1 }}>
      <Typography gutterBottom variant="p" component="div">
        monthly: {getTotal()}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        {months}: month total: {total}
      </Typography>
      <AddButton />
    </Box>
  );
};

export default SelectionsContainer;
