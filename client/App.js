import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

import { OtherProvider } from "./contexts/OtherExpContext";

import { GuestDataContextProvider } from "./contexts/GuestDataContext";

import { ChartProvider } from "./contexts/ChartContext";
import { FinancialDataProvider } from "./contexts/FinancialDataContext";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { Container, Box } from "@mui/material";

const App = () => {
  return (
    <AuthProvider>
      <GuestDataContextProvider>
        <SubscriptionProvider>
          <OtherProvider>
            <FinancialDataProvider>
              <ChartProvider>
                <Container>
                  <Box
                    sx={{
                      maxWidth: 1000,
                      display: { xs: "none", md: "flex" },
                      flexDirection: "column",
                    }}
                  >
                    <Navbar />
                    <Routes />
                  </Box>
                </Container>
              </ChartProvider>
            </FinancialDataProvider>
          </OtherProvider>
        </SubscriptionProvider>
      </GuestDataContextProvider>
    </AuthProvider>
  );
};

export default App;
