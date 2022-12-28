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
import { UserContext } from "../contexts/User";
import { mockedUserContext } from "../data/mockData/userContextData";

/*
Provides contexts for unit tests.
New contexts should be added here to support testing.
 */
const renderHelper = (children: any) => {
  return render(
    <Router>
      <AuthContext.Provider value={mockedAuthContext}>
        <UserContext.Provider value={mockedUserContext}>
          <ProductContext.Provider value={mockedProductContext}>
            <CartContext.Provider value={mockedCartContext}>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CartContext.Provider>
          </ProductContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};
export default renderHelper;
