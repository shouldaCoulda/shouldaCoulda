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
  const [selectedSubscriptions, setSelectedSubs] = useState([
    usersSubscriptions.length,
  ]);

  function getTotal() {
    let total = 0;
    for (let i = 0; i < usersSubscriptions.length; i++) {
      if (selectedSubscriptions[i] === true) {
        total = total + Number(usersSubscriptions[i].price);
      }
    }
    return total;
  }

  // useEffect(() => {
  //   getTotal();
  // }, [selectedSubscriptions]);

  // useEffect(() => {
  //   setSelectedSubs(usersSubscriptions);
  //   setSelectedSubs();
  //   getTotal();
  // }, []);

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
