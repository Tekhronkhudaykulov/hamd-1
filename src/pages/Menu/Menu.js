import React from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import "../../assets/scss/_menu.scss";

const Menu = () => {
  return (
    <>
      <div className="allMenu">
        <NavLink to="menuCategory">
          <div>Новый заказ</div>
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
