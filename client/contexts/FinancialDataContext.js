import React, { useContext, useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../firebase";
import {
  testAlpha,
  testMonthly,
} from "../../script/FinancialAPI/FinancialData";
const FinancialDataContext = React.createContext();

export function useFinancialData() {
  return useContext(FinancialDataContext);
}

var dbRef = ref(database);

export function FinancialDataProvider({ children }) {
  var [financialData, setFinancialData] = useState({});

  async function readData() {
    const data = await testMonthly();
    console.log("in realDAta", financialData);
  }

  //this writes data into the subscriptions folder
  useEffect(async () => {
    const data = testMonthly();
    await setFinancialData(data);
    readData();
  }, []);
  const value = {
    financialData,
    setFinancialData,
    readData,
  };

  return (
    <FinancialDataContext.Provider value={value}>
      {children}
    </FinancialDataContext.Provider>
  );
}
