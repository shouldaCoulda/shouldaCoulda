import React from "react";
import { VictoryLine, VictoryChart } from "victory";
import { useAuth } from "../../contexts/AuthContext";
import { Box } from "@mui/material";
import { getFinData } from "../../../script/FinancialData";
import { useChart } from "../../contexts/ChartContext";

const LineChart = () => {
  const { months, getTotal } = useChart();
  const finData = getFinData(getTotal(), months, "selection");
  const data = getData(getTotal(), months);
  const maxY = data[data.length - 1].y * 1.2;

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i };
    }
    return data;
  }
  return (
    <div>
      <Box sx={{ width: "500px", overflow: "hidden" }}>
        <VictoryChart
          minDomain={({ y: 0 }, { x: 0 })}
          maxDomain={({ y: maxY }, { x: months })}
          domainPadding={30}
        >
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
      </Box>
    </div>
  );
};

export default LineChart;
