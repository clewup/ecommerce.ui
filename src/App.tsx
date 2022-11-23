import React from "react";
import Layout from "./components/organisms/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Store from "./components/pages/Store/Store";
import Cart from "./components/pages/Cart/Cart";
import Admin from "./components/pages/Admin/Admin";
import Login from "./components/pages/Login/Login";
import Account from "./components/pages/Account/Account";

const App = () => {
  return (
    <section id={"ecommerce-root"}>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"store"} element={<Store />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path={"admin"} element={<Admin />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"account"} element={<Account />} />
        </Routes>
      </Layout>
    </section>
  );
};

export default App;
