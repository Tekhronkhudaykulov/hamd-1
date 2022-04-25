import React from "react";

const ActiveButton = ({ setActiveButton, activeButton, onClickFilter }) => {
  return (
    <div className="group-button">
      <button
        onClick={() => {
          setActiveButton("button1");
          onClickFilter(0);
        }}
        className={activeButton === "button1" ? `active_button` : ""}
      >
        Список заказов
      </button>
      <button
        onClick={() => {
          setActiveButton("button2");
          onClickFilter(1);
        }}
        className={activeButton === "button2" ? `active_button` : ""}
      >
        Принятые заказы
      </button>
      <button
        onClick={() => {
          setActiveButton("button3");
          onClickFilter(2);
        }}
        className={activeButton === "button3" ? `active_button` : ""}
      >
        Заказы в пути
      </button>
      <button
        onClick={() => {
          setActiveButton("button4");
          onClickFilter(3);
        }}
        className={activeButton === "button4" ? `active_button` : ""}
      >
        Завершенные заказы
      </button>
    </div>
  );
};

export default ActiveButton;
