import React from "react";

import LineChart from "./LineChart";
import SelectionsContainer from "./SelectionsContainer";
import FinancialContainer from "./FinancialContainer";
import MonthSlider from "./MonthSlider";
import Legend from "./Legend";
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
  Container,
} from "@mui/material";

const ChartContainer = () => {
  return (
    <Container>
      <Box>
        <Legend />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <SelectionsContainer className="selectionsContainer card" />
          <LineChart />
          <FinancialContainer className="selectionsContainer card" />
        </Box>
        <MonthSlider />
      </Box>
    </Container>
  );
};

export default ChartContainer;
