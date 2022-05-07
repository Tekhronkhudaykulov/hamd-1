import React from "react";
import Admin from "../pages/Admin/Admin";
import Logo from "../pages/Logo/Logo";
import Map from "../pages/Map/Map";
import Courier from "../pages/Courier/Courier";
import Orders from "../pages/Orders/Orders";
import { Outlet } from "react-router-dom";
import "../assets/scss/_content.scss";
import MenuCategory from "../pages/Menu/MenuCategory";

const Content = () => {
  return (
    <div className="barMain">
      <div className="bar-main-top">
        <Logo />
        <Admin />
        <Map />
        <Courier />
      </div>
      <div className="bar-main-bottom">
        {/* <MenuCategory /> */}
        <Outlet />
        <Orders />
      </div>
    </div>
  );
};

export default Content;
