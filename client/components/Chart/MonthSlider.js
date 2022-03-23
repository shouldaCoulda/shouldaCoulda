import React from "react";
import { Slider } from "@mui/material";
import { useChart } from "../../contexts/ChartContext";

const MonthSlider = () => {
  const { months, setMonths } = useChart();

  function valuetext(value) {
    return `${value}°C`;
  }

  function handleSlide(e) {
    setMonths(e.target.value);
  }

  return (
    <div className="monthcontainer">
      <h3>duration</h3>
      <div className="sliderContainer">
        <Slider
          aria-label="Temperature"
          defaultValue={12}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={1}
          max={100}
          onChange={handleSlide}
          className="slider"
        />
      </div>
    </div>
  );
};

export default MonthSlider;
