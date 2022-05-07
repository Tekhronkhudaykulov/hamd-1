import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/scss/_kuxnya.scss";

const Kuxnya = () => {
  const categoryList = useSelector((state) => state.category.list);

  return (
    <div className="chicen">
      {categoryList.map((item, index) => (
        <NavLink key={index} to={`/food/${item.id}`}>
          <div className="category">{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Kuxnya;
