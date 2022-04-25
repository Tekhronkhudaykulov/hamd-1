import React, { useEffect } from "react";
import Container from "./container/Container";
import "./assets/scss/Style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import MenuCategory from "./pages/Menu/MenuCategory";
import Menu from "./pages/Menu/Menu";
import Call from "./pages/Call/Call";
import Food from "./pages/Food/Food";
import OrderFinally from "../src/pages/Orders/OrderFinally";
const token = window.localStorage.getItem("@token");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Container />}>
              <Route path="/" element={<Menu />} />
              <Route path="/menuCategory" element={<MenuCategory />} />
              <Route path="/food/:id" element={<Food />} />
              <Route path="/call" element={<Call />} />
            </Route>
            <Route path="/addOrders" element={<OrderFinally />} />
          </>
        ) : (
          <Route exact path={"login"} element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
