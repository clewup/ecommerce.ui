import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User";
import { ProductProvider } from "./contexts/Product";
import { AuthProvider } from "./contexts/Auth";
import { CartProvider } from "./contexts/Cart";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <App />
              </LocalizationProvider>
            </ThemeProvider>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
