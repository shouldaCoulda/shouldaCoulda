import React from "react";
import {
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
  VictoryChart,
  VictoryTheme,
  VictoryCursorContainer,
} from "victory";
import { useAuth } from "../../contexts/AuthContext";
import {
  Slider,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { getFinData } from "../../../script/FinancialData";
import { useChart } from "../../contexts/ChartContext";

const LineChart = () => {
  const { getTotal } = useAuth();
  const { months, setMonths } = useChart();
  // const [months, setMonths] = useState(12);

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i };
    }

    return data;
  }

  const data = getData(getTotal(), months);
  const finData = getFinData(getTotal(), months);
  const maxY = data[data.length - 1].y * 1.2;

  function handleSlide(e) {
    console.log(e.target.value);
    setMonths(e.target.value);
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  let choice = "";

  console.log(finData);
  return (
    <div>
      <Box sx={{ width: "500px", overflow: "hidden" }}>
        <VictoryChart domain={{ x: [0, months], y: [0, maxY] }}>
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
