import React, { useContext, useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
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
  var [bitcoinData, setbitcoinData] = useState([]);

  var btcRef = ref(database, "financialData/bitcoin");

  useEffect(() => {
    onValue(btcRef, (snapshot) => {
      setbitcoinData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((month) => {
          setbitcoinData((oldArray) => [...oldArray, month]);
        });
      }
    });
  }, []);

  function readData() {
    return bitcoinData;
  }

  //this writes data into the subscriptions folder
  // useEffect(async () => {
  //   readData();
  // }, []);

  const value = {
    financialData,
    setFinancialData,
    bitcoinData,
    setbitcoinData,
    readData,
  };

  return (
    <FinancialDataContext.Provider value={value}>
      {children}
    </FinancialDataContext.Provider>
  );
}
