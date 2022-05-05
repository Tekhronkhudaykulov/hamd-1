import React, { useState } from "react";
import "../../assets/scss/_menuTv.scss";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { foodsCountChange } from "../../redux/actions/foodsActions";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteFood } from "../../redux/actions/foodsActions";

const MenuTv = () => {
  const dispatch = useDispatch();
  const foodsList = useSelector((state) => state.foods.meals_fods);

  return (
    <div className="menuTv">
      {foodsList.map((item, index) => (
        <div className="menu-items" key={index}>
          <div className="food-name">
            <p>{item.name}</p>
          </div>
          <div className="food-count">
            <AiOutlineMinusSquare
              onClick={() =>
                dispatch(foodsCountChange({ id: item.id, node: -1 }))
              }
              size={25}
              color={"white"}
            />
            <p>{item.amount}</p>
            <AiOutlinePlusSquare
              onClick={() =>
                dispatch(foodsCountChange({ id: item.id, node: 1 }))
              }
              size={25}
              color={"white"}
            />
            <AiOutlineDelete
              className="iconDelete"
              onClick={() => dispatch(deleteFood({ id: item.id }))}
              size={25}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuTv;
