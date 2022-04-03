import React from "react";

import LineChart from "./LineChart";
import SelectionsContainer from "./SelectionsContainer";
import FinancialContainer from "./FinancialContainer";
import MonthSlider from "./MonthSlider";
import Legend from "./Legend";
import { Box, Container } from "@mui/material";
import ChartTab from "../ChartTab";

const ChartContainer = () => {
  return (
    <Container>
      <Legend />

      <ChartTab />
      <Box>
        <FinancialContainer className="selectionsContainer card" />
        <LineChart />
        <Box sx={{ mb: 7, display: "flex", justifyContent: "space-evenly" }}>
          <MonthSlider sx={{}} />
          <SelectionsContainer className="selectionsContainer card" />
        </Box>
      </Box>
    </Container>
  );
};

export default ChartContainer;
