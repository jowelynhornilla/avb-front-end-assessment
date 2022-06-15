import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";

import store from "./store";
import App from "./app/App";
import { theme } from "theme";

import "index.css";

const rootEl = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// allow for hot module replacement
rootEl.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
