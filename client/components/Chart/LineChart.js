import React from "react";
import { VictoryLine, VictoryChart, VictoryLabel } from "victory";
import { useAuth } from "../../contexts/AuthContext";
import { Box } from "@mui/material";
import { getFinData } from "../../../script/FinancialData";
import { useChart } from "../../contexts/ChartContext";
import { makeLine } from "../../../script/ChartOperations/DisplayLines";
import { uid } from "uid";
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
    { name: "subscriptions", line: data, color: "blue" },
    { name: "apr", line: finData, color: "red" },
  ];

  // const dummydata = [
  //   [
  //     { company: "A", quarter: 1, earnings: 0.1 },
  //     { company: "A", quarter: 2, earnings: 0.2 },
  //     { company: "A", quarter: 3, earnings: 0.3 },
  //     { company: "A", quarter: 4, earnings: 0.4, label: "A" },
  //   ],
  //   [
  //     { company: "B", quarter: 1, earnings: 0.2 },
  //     { company: "B", quarter: 2, earnings: 0.3 },
  //     { company: "B", quarter: 3, earnings: 0.4 },
  //     { company: "B", quarter: 4, earnings: 0.5, label: "B" },
  //   ],
  //   [
  //     { company: "C", quarter: 1, earnings: 0.3 },
  //     { company: "C", quarter: 2, earnings: 0.4 },
  //     { company: "C", quarter: 3, earnings: 0.5 },
  //     { company: "C", quarter: 4, earnings: 0.6, label: "C" },
  //   ],
  //   [
  //     { company: "D", quarter: 1, earnings: 0.4 },
  //     { company: "D", quarter: 2, earnings: 0.5 },
  //     { company: "D", quarter: 3, earnings: 0.6 },
  //     { company: "D", quarter: 4, earnings: 0.7, label: "D" },
  //   ],
  // ];
  const dummydata = sample;

  // console.log(sample);
  const colors = ["red", "blue", "purple", "green"];
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
          {/* {sample.map((elem) => {
            makeLine(elem.line);
            console.log(elem.line);
            console.log("data", data);
          })}
           */}
          {dummydata.map((dataArray, key) => {
            return (
              <VictoryLine
                key={`line_${key}`}
                name={`line_${key}`}
                style={{
                  data: { stroke: colors[key], strokeWidth: 5 },
                }}
                data={dataArray.line}
                // x="quarter"
                // y="earnings"
                labels={(d) => d.label}
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
