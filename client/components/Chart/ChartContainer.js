import React, { useEffect } from "react";

import LineChart from "./LineChart";
import SelectionsContainer from "./SelectionsContainer";
import FinancialContainer from "./FinancialContainer";
import MonthSlider from "./MonthSlider";
import Legend from "./Legend";

import { Box, Container, getTableSortLabelUtilityClass } from "@mui/material";
import ChartTab from "../ChartTab";
import { useAuth } from "../../contexts/AuthContext";

const ChartContainer = () => {
  const { getTotal } = useAuth();
  useEffect(() => {
    getTotal();
  }, []);
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
<<<<<<< HEAD
<<<<<<< HEAD

          {/* <FinancialContainer className="selectionsContainer card" /> */}
=======
          <FinancialContainer className="selectionsContainer card" />
>>>>>>> 93619dcb89e92c2989caf316d7458e3e08fa21af
=======
          <FinancialContainer className="selectionsContainer card" />

>>>>>>> daf0c577ee4d3cc1c2443a3c74590c74745b644d
        </Box>
      </Box>
    </Container>
  );
};

export default ChartContainer;
