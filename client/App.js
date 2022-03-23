import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";
import { GuestDataContextProvider } from "./contexts/GuestDataContext";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <GuestDataContextProvider>
          <SubscriptionProvider>
            <Navbar />
            <Routes />
          </SubscriptionProvider>
        </GuestDataContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
