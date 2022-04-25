import React from "react";
import MenuTv from ".././pages/MenuTv/MenuTv";
import Count from ".././pages/Count/Count";
import "../assets/scss/_sideBar.scss";
const SideBar = () => {
  return (
    <div className="barAsdide">
      <MenuTv />
      <Count />
    </div>
  );
};

export default SideBar;
