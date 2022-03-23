import React from "react";
import { VictoryLine, VictoryChart, VictoryLabel } from "victory";
import { Box } from "@mui/material";
import { getFinData } from "../../../script/FinancialData";
import { useChart } from "../../contexts/ChartContext";
const LineChart = () => {
  const { months, getTotal, selectedApr, lines, maxY } = useChart();
  // const finData = getFinData(getTotal(), months, selectedApr);
  // const data = getData(getTotal(), months);

  // const maxY = data[data.length - 1].y * 1.2;

  // function getData(total, months) {
  //   const data = [];
  //   for (let i = 0; i < months; i++) {
  //     data[i] = { x: i, y: getTotal() * i };
  //   }
  //   return data;
  // }

  // const lines = [
  //   { name: "subscriptions", line: data, color: "blue" },
  //   { name: "apr", line: finData, color: "red" },
  // ];

  const colors = ["red", "blue", "purple", "green"];
  return (
    <div>
      <Box sx={{ width: "500px", overflow: "hidden" }}>
        <VictoryChart
          minDomain={({ y: 0 }, { x: 0 })}
          maxDomain={({ y: maxY }, { x: months })}
          domainPadding={30}
        >
          {lines.map((dataArray, key) => {
            return (
              <VictoryLine
                key={`line_${key}`}
                name={`line_${key}`}
                style={{
                  data: { stroke: colors[key], strokeWidth: 3 },
                }}
                data={dataArray.line}
                labelComponent={<VictoryLabel dx={10} dy={15} renderInPortal />}
              />
            );
          })}
        </VictoryChart>
      </Box>
    </div>
  );
};

export default LineChart;
