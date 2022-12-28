import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "../styles/theme";
import { render } from "@testing-library/react";
import { mockedAuthContext } from "../data/mockData/authContextData";
import { AuthContext } from "../contexts/Auth";
import { mockedProductContext } from "../data/mockData/productContextData";
import { ProductContext } from "../contexts/Product";
import { mockedCartContext } from "../data/mockData/cartContextData";
import { CartContext } from "../contexts/Cart";

const renderHelper = (children: any) => {
  return render(
    <Router>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={mockedAuthContext}>
          <ProductContext.Provider value={mockedProductContext}>
            <CartContext.Provider value={mockedCartContext}>
              {children}
            </CartContext.Provider>
          </ProductContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>
    </Router>
  );
};
export default renderHelper;
