import React, { useState } from "react";
import axios from "axios";
import { CloseSquareOutlined } from "@ant-design/icons";
import "../../assets/scss/_orders.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { foodsClearOrder } from "../../redux/actions/foodsActions";
import ButtonLoadingComponent from "../../element/Button/ButtonLoadingComponent";

const FinishOrders = ({ setOpenModal, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const meals = useSelector((state) => state.foods.meals_fods);
  const initialState = 0;
  const allPrice = meals.reduce(
    (amount, meal) => amount + meal.amount * meal.price,
    initialState
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataPush = async () => {
    setIsLoading(true);
    try {
      await axios.post("https://hamd.loko.uz/api/operator/order-new", data);
      navigate("/");
      dispatch(foodsClearOrder());
    } catch (e) {
      alert("заказ не принять");
      throw Error(e);
    } finally {
      setIsLoading(false);
    }
  };

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
          <p onClick={dataPush}>
            {isLoading ? <ButtonLoadingComponent /> : "Подвердить"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishOrders;
