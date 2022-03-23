import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";
import { ChartProvider } from "./contexts/ChartContext";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <SubscriptionProvider>
          <ChartProvider>
            <Navbar />
            <Routes />
          </ChartProvider>
        </SubscriptionProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
