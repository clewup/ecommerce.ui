import React from "react";
import Layout from "./components/organisms/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <section id={"ecommerce-root"}>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </section>
  );
}

export default App;
