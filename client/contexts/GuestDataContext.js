import React, { useContext, useState } from "react";

const GuestDataContext = React.createContext();

export function useGuestData() {
  return useContext(GuestDataContext);
}

export function GuestDataContextProvider({ children }) {
  var expenses = {};
  const [subscriptions, setSubscriptions] = useState([]);

  var data = { expenses, subscriptions, setSubscriptions };
  return (
    <GuestDataContext.Provider value={data}>
      {children}
    </GuestDataContext.Provider>
  );
}
