import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

import { OtherProvider } from "./contexts/OtherExpContext";

import { ChartProvider } from "./contexts/ChartContext";
import { FinancialDataProvider } from "./contexts/FinancialDataContext";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { Container, Box } from "@mui/material";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
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
                    paddingBottom: 8,
                  }}
                >
                  <Navbar />
                  <Routes />
                </Box>
                <Footer />
              </Container>
            </ChartProvider>
          </FinancialDataProvider>
        </OtherProvider>
      </SubscriptionProvider>
    </AuthProvider>
  );
};

export default App;
