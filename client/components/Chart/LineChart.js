import React from "react";
import { VictoryLine, VictoryChart } from "victory";
import { useAuth } from "../../contexts/AuthContext";
import { Box } from "@mui/material";
import { getFinData } from "../../../script/FinancialData";
import { useChart } from "../../contexts/ChartContext";
import { makeLine } from "../../../script/ChartOperations/DisplayLines";
const LineChart = () => {
  const { months, getTotal, selectedApr } = useChart();
  const finData = getFinData(getTotal(), months, selectedApr);
  const data = getData(getTotal(), months);

  const maxY = data[data.length - 1].y * 1.2;

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i };
    }
    return data;
  }

  const sample = [
    { name: "subscriptions", array: data, color: "blue" },
    { name: "apr", array: finData, color: "red" },
  ];
  // console.log(sample);
  return (
    <div>
      <Box sx={{ width: "500px", overflow: "hidden" }}>
        <VictoryChart
          minDomain={({ y: 0 }, { x: 0 })}
          maxDomain={({ y: maxY }, { x: months })}
          domainPadding={30}
        >
          {/* <VictoryLine
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
          /> */}
          {makeLine(finData)}
        </VictoryChart>
      </Box>
    </div>
  );
};

export default LineChart;
