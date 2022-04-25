import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";
import "../assets/scss/_container.scss";

const Container = () => {
  return (
    <div className="i-container">
      <Content />
      <SideBar />
    </div>
  );
};

export default Container;
