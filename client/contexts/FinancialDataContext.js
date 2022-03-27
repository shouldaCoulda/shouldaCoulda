import React, { useContext, useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../firebase";
import { testAlpha } from "../../script/FinancialAPI/FinancialData";
const FinancialDataContext = React.createContext();

export function useSubscription() {
  return useContext(FinancialDataContext);
}

var dbRef = ref(database);

export function FinancialDataProvider({ children }) {
  var [FinancialData, setFinancialData] = useState({});

  //this writes data into the subscriptions folder
  useEffect(() => {
    console.log("hello");
    testAlpha();
  }, []);
  const value = {
    FinancialData,
    setFinancialData,
  };

  return (
    <FinancialDataContext.Provider value={value}>
      {children}
    </FinancialDataContext.Provider>
  );
}
