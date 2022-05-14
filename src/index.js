import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./utils/reportWebVitals";
import App from "./App";
import "./styles/index.css";
// redux
import store from "./redux/store";
import { Provider } from "react-redux"
//theme
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { lightTheme, darkTheme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ThemeProvider>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
