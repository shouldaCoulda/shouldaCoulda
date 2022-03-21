import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </AuthProvider>,

  document.getElementById("app")
);
