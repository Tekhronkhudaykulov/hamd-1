import React from "react";
import "../../assets/scss/_logo.scss";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("@token");
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      <div className="allLogo">
        <div className="left-header-name">r_k</div>
        <IoMdLogOut className="icon" size={40} onClick={handleLogout} />
      </div>
    </>
  );
};

export default Logo;
