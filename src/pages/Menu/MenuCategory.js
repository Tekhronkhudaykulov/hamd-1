import React, { useEffect } from "react";
import Button from "../../element/Button/Button";
import "./MenuCategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/actions/menuCategoryActions";
import { Link } from "react-router-dom";
import ButtonFoodLoadingCom from "../../element/Button/ButtonFoodLoadingCom";

const MenuCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const categoryList = useSelector((state) => state.category.list);
  const { loading } = useSelector((state) => state.category);
  return (
    <>
      {loading ? (
        <ButtonFoodLoadingCom />
      ) : (
        <div className="allCategory">
          <Button />
          {categoryList.map((item, index) => (
            <Link key={index} to={`/food/${item.id}`}>
              <div className="category">{item.name}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuCategory;
