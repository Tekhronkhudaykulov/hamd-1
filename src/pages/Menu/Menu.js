import React from "react";
import { NavLink } from "react-router-dom";
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
