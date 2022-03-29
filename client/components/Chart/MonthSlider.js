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
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography gutterBottom variant="h6" component="div">
        Duration
      </Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={12}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={30}
          onChange={handleSlide}
          className="slider"
        />
      </Box>
    </Box>
  );
};

export default MonthSlider;
