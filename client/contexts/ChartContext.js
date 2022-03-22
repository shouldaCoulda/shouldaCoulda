import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

//hook to use context outside of this file
const ChartContext = React.createContext();

export function useChart() {
  return useContext(ChartContext);
}

export function ChartProvider({ children }) {
  const { usersSubscriptions } = useAuth();
  const [months, setMonths] = useState(12);
  const [selectedSubscriptions, setSelectedSubs] = useState(
    Array(usersSubscriptions.length).fill(false)
  );

  const value = {
    months,
    setMonths,
    setSelectedSubs,
    selectedSubscriptions,
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}
