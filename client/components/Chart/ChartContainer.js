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
        <Box>
          <SelectionsContainer className="selectionsContainer card" />

          <LineChart />
        </Box>
        <MonthSlider />
        <FinancialContainer className="selectionsContainer card" />
      </Box>
    </Container>
  );
};

export default ChartContainer;
