import React from "react";
import { useChart } from "../../contexts/ChartContext";
const Legend = () => {
  const { lines, selectedLines } = useChart();

  let displayedLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (selectedLines[i] === true) {
      displayedLines.push(lines[i]);
    }
  }
  return (
    <div className="ledgendContainer">
      {displayedLines.map((elem, key) => {
        return (
          <div className="legend-text" key={key} style={{ color: elem.color }}>
            <span>
              {" "}
              {elem.name} : {elem.color}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Legend;
