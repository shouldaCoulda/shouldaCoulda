import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";
import AddButton from "./AddButton";
import { Box, Container, Typography } from "@mui/material";
import { Background } from "victory";

const SelectionsContainer = () => {
  const { usersSubscriptions } = useAuth();
  const { getTotal, months } = useChart();
  const total = (getTotal() * months).toFixed(2);

  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Typography gutterBottom variant="p" component="div">
          monthly: {getTotal()}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {months}: month total: {total}
        </Typography>
        <AddButton />
      </Box>
    </>
  );
};

export default SelectionsContainer;
