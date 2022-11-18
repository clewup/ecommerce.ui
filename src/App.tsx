import React, { useContext } from "react";
import Layout from "./components/organisms/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { UserContext } from "./contexts/User";
import Login from "./components/pages/Login/Login";
import Store from "./components/pages/Store/Store";
import Cart from "./components/pages/Cart/Cart";

const App = () => {
  /*const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return <Login />;
  }*/

  return (
    <section id={"ecommerce-root"}>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"store"} element={<Store />} />
          <Route path={"cart"} element={<Cart />} />
        </Routes>
      </Layout>
    </section>
  );
};

export default App;
