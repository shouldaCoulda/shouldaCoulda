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

  //this writes data into the subscriptions folder
  useEffect(() => {
    console.log("hello");
    testAlpha();
    setFinancialData(testMonthly());
    console.log("use effect", financialData);
  }, []);
  const value = {
    financialData,
    setFinancialData,
  };

  return (
    <FinancialDataContext.Provider value={value}>
      {children}
    </FinancialDataContext.Provider>
  );
}
