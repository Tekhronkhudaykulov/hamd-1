import React, { useEffect } from "react";
import Button from "../../element/Button/Button";
import "./MenuCategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/actions/menuCategoryActions";
import { Link } from "react-router-dom";

const MenuCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const categoryList = useSelector((state) => state.category.list);
  return (
    <>
      <div className="allCategory">
        <Button />
        {categoryList.map((item, index) => (
          <Link key={index} to={`/food/${item.id}`}>
            <div className="category">{item.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
