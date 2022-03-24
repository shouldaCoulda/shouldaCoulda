import React, { useState, useEffect } from "react";
import { VictoryLine, VictoryChart } from "victory";
import { Box } from "@mui/material";
import { useChart } from "../../contexts/ChartContext";
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
    <div className="finChart">
      <Box sx={{ width: "550px" }}>
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
                  data: { stroke: dataArray.color, strokeWidth: 3 },
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
