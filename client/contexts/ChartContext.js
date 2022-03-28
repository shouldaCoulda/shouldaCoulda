import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getFinData } from "../../script/ChartOperations/DataGen/FinancialData";
import {
  getStockData,
  getBtcData,
  getEthData,
} from "../../script/ChartOperations/DataGen/StockData";
import { useFinancialData } from "./FinancialDataContext";

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
  const { financialData, bitcoinData } = useFinancialData();
  let maxY = 0;

  const finData = getFinData(getTotal(), months, selectedApr);
  const data = getData(getTotal(), months);
  // const ethData = getEthData(getTotal(), months);
  // const btcData = getBtcData(getTotal(), months, bitcoinData);

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

  function getLines() {
    let returnedLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (selectedLines[i] === true) {
        returnedLines.push(lines[i]);
      }
    }
    return returnedLines;
  }

  useEffect(() => {
    getTotal();
  }, [usersSubscriptions]);

  useEffect(() => {
    setLines([
      { name: "subscriptions", line: data, color: "blue" },
      { name: "apr", line: finData, color: "red" },
      // { name: "Ethereum", line: ethData, color: "green" },
      // { name: "Bitcoin", line: btcData, color: "purple" },
    ]);
  }, [months, financialData]);

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
    getLines,
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}
