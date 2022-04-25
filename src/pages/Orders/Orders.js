import React, { useEffect, useState } from "react";
import "../../assets/scss/_orders.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { fetchOrders } from "../../redux/actions/ordersActions";
import { useDispatch, useSelector } from "react-redux";
import ActiveButton from "../../component/Orders/ActiveButton";

const Orders = () => {
  const [filter, setFilter] = useState({
    status: "",
  });
  const [activeButton, setActiveButton] = useState("button1");

  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchOrders(filter));
  }, []);

  return (
    <div className="main-right-bottom">
      <ActiveButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        onClickFilter={(status) => {
          let newFilter = {
            ...filter,
            status,
          };
          setFilter(newFilter);
          dispatch(fetchOrders(newFilter));
        }}
      />

      {orders.map((item, index) => (
        <div key={index} className="right-bottom-item">
          <div className="orders-p">
            <span></span>
            <p>#{item.id}</p>
            <span></span>
          </div>
          <div className="gamburger">
            {item.orderProducts &&
              item.orderProducts.map((item, ind) => (
                <div className="about-food" key={ind}>
                  <p>{item.product.name} ...</p>
                  <p>{item.count} ...</p>
                  <p>{item.product.price}сум</p>
                </div>
              ))}
            <div className="itog-address">
              <MdOutlineLocationOn size={50} style={{ color: "white" }} />
              <p>...</p>
              <p> {item.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
