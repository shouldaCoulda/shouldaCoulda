import React from "react";
import { VictoryLine, VictoryChart } from "victory";
import { Box } from "@mui/material";
import { useChart } from "../../contexts/ChartContext";
const LineChart = () => {
  const { months, lines, maxY, selectedLines } = useChart();

  let displayedLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (selectedLines[i] === true) {
      displayedLines.push(lines[i]);
    }
  }
  const colors = ["red", "blue", "yellow", "purple"];

  return (
    <div>
      <Box sx={{ width: "500px", overflow: "hidden" }}>
        <VictoryChart
          minDomain={({ y: 0 }, { x: 0 })}
          maxDomain={({ y: maxY }, { x: months })}
          domainPadding={30}
        >
          {displayedLines.map((dataArray, key) => {
            return (
              <VictoryLine
                key={`line_${key}`}
                name={`line_${key}`}
                style={{
                  data: { stroke: colors[key], strokeWidth: 3 },
                }}
                data={dataArray.line}
              />
            );
          })}
        </VictoryChart>
      </Box>
    </div>
  );
};

export default LineChart;
