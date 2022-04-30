import React from "react";
import Admin from "../pages/Admin/Admin";
import Logo from "../pages/Logo/Logo";
import Map from "../pages/Map/Map";
import Courier from "../pages/Courier/Courier";
import Kuxnya from "../pages/Kuxnya/Kuxnya";
import Menu from "../pages/Menu/Menu";
import Orders from "../pages/Orders/Orders";
import { Outlet } from "react-router-dom";
import "../assets/scss/_content.scss";
const Content = () => {
  return (
    <div className="barMain">
      <div className="bar-main-top">
        <Logo />
        <Admin />
        <Map />
        <Courier />
        {/* <Kuxnya /> */}
      </div>
      <div className="bar-main-bottom">
        <Outlet />
        <Orders />
      </div>
    </div>
  );
};

export default Content;
