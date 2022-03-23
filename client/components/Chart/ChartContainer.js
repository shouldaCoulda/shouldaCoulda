import React from "react";

import LineChart from "./LineChart";
import SelectionsContainer from "./SelectionsContainer";
import FinancialContainer from "./FinancialContainer";
import MonthSlider from "./MonthSlider";

const ChartContainer = () => {
  return (
    <div>
      <div className="chartContainer">
        <SelectionsContainer className="selectionsContainer card" />
        <LineChart />
        <FinancialContainer className="selectionsContainer card" />
      </div>
      <MonthSlider />
    </div>
  );
};

export default ChartContainer;
