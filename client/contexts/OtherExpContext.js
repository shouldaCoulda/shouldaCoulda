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

  function writeExpenseData(data, userId) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].ammount !== "") {
        const uuid = uid();
        set(ref(database, `users/` + userId + "/expenses/" + uuid), {
          name: data[i].name,
          price: data[i].ammount,
          uid: uuid,
        });
      }
    }
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
