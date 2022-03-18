import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <SubscriptionProvider>
          <Navbar />
          <Routes />
        </SubscriptionProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
