import React from "react";
import { VictoryLine, VictoryChart } from "victory";

export function makeLine(data) {
  return (
    <VictoryLine
      data={data}
      style={{
        data: { stroke: "red" },
        parent: { border: "3px solid #ccc" },
      }}
    />
  );
}
