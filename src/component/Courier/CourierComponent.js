import React from "react";
import "../../assets/scss/_courier.scss";
const CourierComponent = ({ onChengeSearch }) => {
  return (
    <input
      type="text"
      className="curier_input"
      placeholder="Kurierning idisini kiriting"
      onChange={(e) => {
        onChengeSearch(e.target.value);
      }}
    />
  );
};

export default CourierComponent;
