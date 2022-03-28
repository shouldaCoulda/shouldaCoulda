import React, { useContext, useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { database } from "../firebase";

const FinancialDataContext = React.createContext();

export function useFinancialData() {
  return useContext(FinancialDataContext);
}

var dbRef = ref(database);

export function FinancialDataProvider({ children }) {
  var [financialData, setFinancialData] = useState({});
  var [bitcoinData, setbitcoinData] = useState([]);
  var [ethereumData, setEthData] = useState([]);

  var btcRef = ref(database, "financialData/bitcoin");
  var ethRef = ref(database, "financialData/ethereum");

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
    onValue(ethRef, (snapshot) => {
      setEthData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((month) => {
          setEthData((oldArray) => [...oldArray, month]);
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
    ethereumData,
  };

  return (
    <FinancialDataContext.Provider value={value}>
      {children}
    </FinancialDataContext.Provider>
  );
}
