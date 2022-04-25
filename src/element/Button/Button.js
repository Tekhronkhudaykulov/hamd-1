import React from "react";
import { NavLink } from "react-router-dom";
import Back from "../../assets/img/arrow-left.svg";
import "../../assets/scss/_button.scss";
const Button = () => {
  return (
    <NavLink to={-1}>
      <div className="button">
        <img src={Back} alt="" />
      </div>
    </NavLink>
  );
};

export default Button;
