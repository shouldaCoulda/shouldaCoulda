import React, { useState, useEffect } from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography, Container } from "@mui/material";

const LineChart = () => {
  const { months, lines, maxY, selectedLines, setMonths } = useChart();
  const [displayedLines, setDisplayedLine] = useState([]);

  function setDisplayedLines() {
    let vals = [];
    for (let i = 0; i < lines.length; i++) {
      if (selectedLines[i] === true) {
        vals.push(lines[i]);
      }
    }
    setDisplayedLine(vals);
  }

  useEffect(() => {
    setDisplayedLines();
  }, [selectedLines, months]);

  useEffect(() => {
    setDisplayedLines();
  }, []);

  return (
    <Box sx={{ width: "500px", display: "flex" }}>
      <VictoryChart
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
        minDomain={({ y: 0 }, { x: 0 })}
        maxDomain={({ y: maxY }, { x: months })}
        domainPadding={30}
        containerComponent={
          <VictoryVoronoiContainer
            sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
            labels={({ datum }) => `${datum.y.toFixed(2)}`}
          />
        }
        standalone={true}
        animate={{
          duration: 500,
        }}
      >
        {lines.map((dataArray, key) => {
          return (
            <VictoryLine
              key={`line_${key}`}
              name={`line_${key}`}
              style={{
                data: { stroke: dataArray.color, strokeWidth: 3 },
              }}
              data={dataArray.line}
            />
          );
        })}
      </VictoryChart>
    </Box>
  );
};

export default LineChart;
