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
  const [selectedSubscriptions, setSelectedSubs] = useState([]);

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

  const value = {
    months,
    setMonths,
    setSelectedSubs,
    selectedSubscriptions,
    getTotal,
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}
