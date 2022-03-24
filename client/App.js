import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

import { OtherProvider } from "./contexts/OtherExpContext";

import { GuestDataContextProvider } from "./contexts/GuestDataContext";

import { ChartProvider } from "./contexts/ChartContext";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <GuestDataContextProvider>
          <SubscriptionProvider>
              <OtherProvider>
              <ChartProvider>
                <Navbar />
                <Routes />
              </ChartProvider>
            </OtherProvider>
          </SubscriptionProvider>
        </GuestDataContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
