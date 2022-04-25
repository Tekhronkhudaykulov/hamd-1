import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/_kuxnya.scss";
const Kuxnya = () => {
  return (
    <div className="chicen">
      <NavLink to="menuCategory">
        <div className="kuxnya">
          <p>Кухня</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Kuxnya;
