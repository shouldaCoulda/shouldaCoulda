import React, { useState } from "react";
import {
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
  VictoryChart,
  VictoryTheme,
  VictoryCursorContainer,
} from "victory";
import { useAuth } from "../contexts/AuthContext";
import {
  Slider,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

const LineChart = () => {
  const { currentUser, usersSubscriptions, removeSubscription, getTotal } =
    useAuth();
  const [months, setMonths] = useState(12);

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i };
    }

    return data;
  }

  function getFinData(total, months) {
    const data = [];
    let random = Math.random();
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i * 2 };
    }

    return data;
  }

  const data = getData(getTotal(), months);
  const finData = getFinData(getTotal(), months);
  const maxY = finData[finData.length - 1].y * 1.2;

  function handleSlide(e) {
    console.log(e.target.value);
    setMonths(e.target.value);
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  let choice = "";

  console.log(finData);
  return (
    <div>
      <h1>Subscriptions: {getTotal()}</h1>

      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choice</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={choice}
            label="Compare to "
            onChange={handleChange}
          >
            <MenuItem value={"bitcoin"}>bitcoin</MenuItem>
            <MenuItem value={"sp"}>S&P500</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Box sx={{ width: "500px", overflow: "hidden" }}>
        <VictoryChart domain={{ x: [0, months], y: [0, maxY] }}>
          <VictoryLine
            data={data}
            style={{
              data: { stroke: "blue" },
              parent: { border: "3px solid #ccc" },
            }}
          />
          <VictoryLine
            data={finData}
            style={{
              data: { stroke: "red" },
              parent: { border: "3px solid #ccc" },
            }}
          />
        </VictoryChart>
        <h3>months</h3>
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
        />
      </Box>
    </div>
  );
};

export default LineChart;
