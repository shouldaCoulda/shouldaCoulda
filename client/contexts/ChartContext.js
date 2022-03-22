import React, { useContext, useState, useEffect } from "react";

//hook to use context outside of this file
const ChartContext = React.createContext();

export function useChart() {
  return useContext(ChartContext);
}

export function ChartProvider({ children }) {
  const [months, setMonths] = useState(12);

  const value = {
    months,
    setMonths,
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}
