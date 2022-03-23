import React, { useEffect } from "react";
import { VictoryLine, VictoryChart, VictoryLabel } from "victory";
import { Box } from "@mui/material";
import { useChart } from "../../contexts/ChartContext";
const LineChart = () => {
  const {
    months,
    lines,
    maxY,
    getLines,
    selectedSubscriptions,
    selectedLines,
  } = useChart();

  let displayedLines = [];
  // function setLines() {
  displayedLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (selectedLines[i] === true) {
      displayedLines.push(lines[i]);
    }
    console.log(displayedLines);
  }
  // }
  const colors = ["red", "blue", "purple", "green"];

  // useEffect(() => {
  //   setLines();
  // }, [selectedSubscriptions]);
  // useEffect(() => {
  // setLines();
  // }, []);

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
                // labelComponent={<VictoryLabel dx={10} dy={15} renderInPortal />}
              />
            );
          })}
        </VictoryChart>
      </Box>
    </div>
  );
};

export default LineChart;
