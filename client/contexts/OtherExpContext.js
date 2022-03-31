import React, { useContext, useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  set,
  remove,
} from "firebase/database";
import { database } from "../firebase";
import { uid } from "uid";
import { otherData } from "../../script/OtherExpenses";

const OtherExpensesContext = React.createContext();

export function useOtherExpenses() {
  return useContext(OtherExpensesContext);
}

let otherExpRef = ref(database, "otherExpenses");

export function OtherProvider({ children }) {
  let [otherExpData, setOtherData] = useState([]);

  useEffect(() => {
    onValue(otherExpRef, (snapshot) => {
      setOtherData([]);
      const otherData = snapshot.val();
      if (otherData !== null) {
        Object.values(otherData).map((expense) => {
          setOtherData((oldArray) => [...oldArray, expense]);
        });
      }
    });
  }, []);

  function writeExpenseData(name, price, userId) {
    const uuid = uid();
    set(ref(database, `users/` + userId + "/expenses/" + userId), {
      name: name,
      price: price,
      uid: uuid,
    });
  }

  //delete
  const handleDelete = (otherExpense) => {
    remove(ref(database, `/${otherExpense.uuid}`));
  };

  const value = {
    otherExpData,
    writeExpenseData,
  };

  return (
    <OtherExpensesContext.Provider value={value}>
      {children}
    </OtherExpensesContext.Provider>
  );
}
