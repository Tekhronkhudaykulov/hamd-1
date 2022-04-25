import React, { useEffect } from "react";
import Button from "../../element/Button/Button";
import "../../assets/scss/_food.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods, foodsListAdd } from "../../redux/actions/foodsActions";
import ButtonFoodLoadingCom from "../../element/Button/ButtonFoodLoadingCom";

const Food = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods(id));
  }, []);

  const foodsList = useSelector((state) => state.foods.list);
  const { loading } = useSelector((state) => state.foods);

  const addMeal = (item) => {
    const meal = {
      id: item.id,
      price: item.price,
      amount: 1,
      name: item.name,
    };
    dispatch(foodsListAdd(meal));
  };
  return (
    <>
      {loading ? (
        <ButtonFoodLoadingCom />
      ) : (
        <div className="allFood">
          <Button />
          <>
            {foodsList.map((item, index) => (
              <div className="foodobshi" key={index}>
                <div className="foodName" onClick={() => addMeal(item)}>
                  <p>{item.name}</p>
                  <span>{item.price} сум</span>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default Food;
