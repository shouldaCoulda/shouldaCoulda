import React from "react";
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

const LineChart = () => {
  const { currentUser, usersSubscriptions, removeSubscription, getTotal } =
    useAuth();
  let months = 12;

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i, label: Math.floor(getTotal() * i) };
    }

    console.log(data);
    return data;
  }
  const data = getData(getTotal(), months);

  return (
    <div>
      <h1>Subscriptions: {getTotal()}</h1>
      <VictoryChart domain={{ x: [0, 12], y: [0, 1000] }}>
        <VictoryLine
          data={data}
          style={{
            data: { stroke: "blue" },
            parent: { border: "1px solid #ccc" },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;
