import React from "react";
import { CloseSquareOutlined } from "@ant-design/icons";
import "../../assets/scss/_orders.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewOrders } from "../../redux/actions/newOrdersActions";
const FinishOrders = ({ setOpenModal, data }) => {
  const meals = useSelector((state) => state.foods.meals_fods);
  const initialState = 0;
  const allPrice = meals.reduce(
    (amount, meal) => amount + meal.amount * meal.price,
    initialState
  );
  const dispatch = useDispatch();
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
          <p onClick={() => dispatch(fetchNewOrders(data))}>Подвердить</p>
        </div>
      </div>
    </div>
  );
};

export default FinishOrders;
