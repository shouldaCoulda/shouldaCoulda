import React from 'react';

import LineChart from './LineChart';
import SelectionsContainer from './SelectionsContainer';
import FinancialContainer from './FinancialContainer';
import MonthSlider from './MonthSlider';
import Legend from './Legend';
import { Box, Container } from '@mui/material';
import ChartTab from '../ChartTab';

const ChartContainer = () => {
  return (
    <Container>
      <ChartTab />
      <Box>
        <Legend />
        <Box sx={{ display: { xs: "flex", md: "flex", alignItems: "center" } }}>
          <SelectionsContainer className="selectionsContainer card" />

          <LineChart />
          <FinancialContainer className='selectionsContainer card' />
        </Box>
        <MonthSlider />
      </Box>
    </Container>
  );
};

export default ChartContainer;
