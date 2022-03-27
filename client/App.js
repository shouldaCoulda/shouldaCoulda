import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

import { OtherProvider } from "./contexts/OtherExpContext";

import { GuestDataContextProvider } from "./contexts/GuestDataContext";

import { ChartProvider } from "./contexts/ChartContext";
import { FinancialDataProvider } from "./contexts/FinancialDataContext";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <GuestDataContextProvider>
          <SubscriptionProvider>
            <OtherProvider>
              <FinancialDataProvider>
                <ChartProvider>
                  <Navbar />
                  <Routes />
                </ChartProvider>
              </FinancialDataProvider>
            </OtherProvider>
          </SubscriptionProvider>
        </GuestDataContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
