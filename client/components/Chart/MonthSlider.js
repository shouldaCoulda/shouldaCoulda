import React, { useEffect } from "react";
import { Slider } from "@mui/material";
import { useChart } from "../../contexts/ChartContext";
import { useFinancialData } from "../../contexts/FinancialDataContext";
import { Box, Typography, Container } from "@mui/material";

const MonthSlider = () => {
  const { months, setMonths } = useChart();
  const { financialData, readData, bitcoinData } = useFinancialData();

  function valuetext(value) {
    return `${value}°C`;
  }

  function handleSlide(e) {
    setMonths(e.target.value);
  }

  return (
    <Box
      sx={{
        mr: 2,
        display: "flex",
        flexDirection: "column",
        width: "max-content",
      }}
    >
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ fontSize: { xs: 12, md: 18, lg: 24 } }}
      >
        Adjust Duration
      </Typography>
      <Box sx={{ height: "max-content", width: { xs: 150, md: 300, lg: 400 } }}>
        <Slider
          aria-label="Temperature"
          defaultValue={12}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={30}
          size="small"
          onChange={handleSlide}
          className="slider"
        />
      </Box>
    </Box>
  );
};

export default MonthSlider;
