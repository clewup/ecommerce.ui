import React, { useContext } from "react";
import Layout from "./components/organisms/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Store from "./components/pages/Store/Store";
import Cart from "./components/pages/Cart/Cart";
import Admin from "./components/pages/Admin/Admin";
import Login from "./components/pages/Login/Login";
import Account from "./components/pages/Account/Account";
import Register from "./components/pages/Register/Register";
import Product from "./components/pages/Product/Product";
import Checkout from "./components/pages/Checkout/Checkout";
import { AuthContext } from "./contexts/Auth";
import axios from "axios";

const App = () => {
  const { accessToken } = useContext(AuthContext);

  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

  return (
    <section id={"ecommerce-root"}>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"store"} element={<Store />} />
          <Route path={"store/:category"} element={<Store />} />
          <Route path={"product/:id"} element={<Product />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path={"checkout"} element={<Checkout />} />
          <Route path={"admin"} element={<Admin />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          <Route path={"account"} element={<Account />} />
        </Routes>
      </Layout>
    </section>
  );
};

export default App;
