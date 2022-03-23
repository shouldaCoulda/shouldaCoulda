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
    <div>
      {displayedLines.map((elem, key) => {
        return (
          <span key={key}>
            {" "}
            {elem.name} : {elem.color}
          </span>
        );
      })}
      {/* <span>red: findata blue: subscriptions price</span> */}
    </div>
  );
};

export default Legend;
