import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getFinData } from "../../script/FinancialData";

//hook to use context outside of this file
const ChartContext = React.createContext();

export function useChart() {
  return useContext(ChartContext);
}

export function ChartProvider({ children }) {
  const { usersSubscriptions } = useAuth();
  const [months, setMonths] = useState(12);
  const [selectedSubscriptions, setSelectedSubs] = useState([]);
  const [selectedLines, setSelectedLines] = useState([]);
  const [selectedApr, setSelectedApr] = useState(1);
  const [lines, setLines] = useState([]);
  let maxY = 0;

  const finData = getFinData(getTotal(), months, selectedApr);
  const data = getData(getTotal(), months);

  function getData(total, months) {
    const data = [];
    for (let i = 0; i < months; i++) {
      data[i] = { x: i, y: getTotal() * i };
    }
    maxY = data[data.length - 1].y * 1.2;

    return data;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < usersSubscriptions.length; i++) {
      if (selectedSubscriptions[i] === true) {
        total = total + Number(usersSubscriptions[i].price);
      }
    }
    return total.toFixed(2);
  }

  useEffect(() => {
    getTotal();
  }, [usersSubscriptions]);
  useEffect(() => {
    setLines([
      { name: "subscriptions", line: data, color: "blue" },
      { name: "apr", line: finData, color: "red" },
    ]);
  }, [months]);

  const value = {
    months,
    setMonths,
    setSelectedSubs,
    selectedSubscriptions,
    getTotal,
    selectedApr,
    setSelectedApr,
    lines,
    setLines,
    maxY,
    selectedLines,
    setSelectedLines,
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}
