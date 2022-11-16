import React, { useContext } from "react";
import Layout from "./components/organisms/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { UserContext } from "./contexts/User";
import Login from "./components/pages/Login/Login";

const App = () => {
  const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <section id={"ecommerce-root"}>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </section>
  );
};

export default App;
