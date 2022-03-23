import React, { useContext } from "react";

const GuestDataContext = React.createContext();

export function useGuestData() {
  return useContext(GuestDataContext);
}

export function GuestDataContextProvider({ children }) {
  var expenses = {};
  var subscriptions = [];

  var data = { expenses, subscriptions };
  return (
    <GuestDataContext.Provider value={data}>
      {children}
    </GuestDataContext.Provider>
  );
}
