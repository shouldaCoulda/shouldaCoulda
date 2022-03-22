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
import { Slider } from "@mui/material";
const LineChart = () => {
  const { currentUser, usersSubscriptions, removeSubscription, getTotal } =
    useAuth();
  // let months = 60;
  const [months, setMonths] = useState(12);

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i };
    }

    return data;
  }

  const data = getData(getTotal(), months);
  const maxY = data[data.length - 1].y * 1.2;
  console.log(maxY);

  function handleSlide(e) {
    console.log(e.target.value);
    setMonths(e.target.value);
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <h1>Subscriptions: {getTotal()}</h1>
      <VictoryChart domain={{ x: [0, months], y: [0, maxY] }}>
        <VictoryLine
          data={data}
          style={{
            data: { stroke: "blue" },
            parent: { border: "1px solid #ccc" },
          }}
        />
      </VictoryChart>
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
    </div>
  );
};

export default LineChart;
