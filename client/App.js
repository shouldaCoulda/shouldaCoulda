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
import Footer from "./components/Footer";

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
                      display: "flex",
                      flexDirection: "column",
                      paddingBottom: 15,
                    }}
                  >
                    <Navbar />
                    <Routes />
                    <Footer />
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
