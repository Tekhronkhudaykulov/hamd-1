import React from "react";
import { CloseSquareOutlined } from "@ant-design/icons";

import "../../assets/scss/_orders.scss";
import { useSelector } from "react-redux";
const FinishOrders = ({ setOpenModal }) => {
  const meals = useSelector((state) => state.foods.meals_fods);

  const initialState = 0;
  const allPrice = meals.reduce(
    (amount, meal) => amount + meal.amount * meal.price,
    initialState
  );

  return (
    <div className="modal-finishOrders">
      <div className="finishOrders">
        <CloseSquareOutlined
          className="icon-close"
          onClick={() => setOpenModal(false)}
        />
        <div className="category-orders">
          <p>Наименование</p>
          <p>Количество</p>
          <p>Цена</p>
        </div>
        <div className="food-name">
          {meals.map((item) => (
            <>
              <p>{item.name}</p>
              <p>{item.amount}</p>
              <p>{item.price} сум</p>
            </>
          ))}
        </div>
        <div className="addZakas">
          <p>
            Обшая сумма <span>{allPrice} сум</span>
          </p>
          <p>Подвердить</p>
        </div>
      </div>
    </div>
  );
};

export default FinishOrders;
