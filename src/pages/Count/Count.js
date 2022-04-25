import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckSucces from "../../assets/img/check-succes.svg";
import Xcloses from "../../assets/img/Xclosesvg.svg";
import "../../assets/scss/_count.scss";
import { foodsClearOrder } from "../../redux/actions/foodsActions";
const Count = () => {
  const foodsList = useSelector((state) => state.foods.meals_fods);
  const dispatch = useDispatch();

  const initialState = 0;
  const allPrice = foodsList.reduce(
    (amount, meal) => amount + meal.amount * meal.price,
    initialState
  );

  return (
    <div className="bar-aside-bottom">
      <div className="bar-total">Оплатить Сум: {allPrice}</div>
      {foodsList.length > 0 ? (
        <div className="barTotal-img">
          <Link className="img-1" to="/addOrders">
            <img src={CheckSucces} alt="" />
          </Link>
          <div className="img-2" onClick={() => dispatch(foodsClearOrder())}>
            <img src={Xcloses} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Count;
