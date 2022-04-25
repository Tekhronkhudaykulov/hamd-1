import React, { useEffect, useState } from "react";
import "../../assets/scss/_orders.scss";
import { fetchOrders } from "../../redux/actions/ordersActions";
import { useDispatch, useSelector } from "react-redux";
import ActiveButton from "../../component/Orders/ActiveButton";
import ButtonOrdersLoading from "../../element/Button/ButtonOrdersLoading";
const Orders = () => {
  const [filter, setFilter] = useState({
    status: "",
  });
  const [activeButton, setActiveButton] = useState("button1");

  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders.orders);

  const { loading } = useSelector((state) => state.orders);

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
      {loading ? (
        <div className="loading-orders">
          <ButtonOrdersLoading />
        </div>
      ) : (
        orders.map((item, index) => (
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
                    <p>кл {item.count} ...</p>
                    <p>{item.product.price}сум</p>
                  </div>
                ))}
              <div className="itog-address">
                <p> Адресс доставки: {item.address}</p>
              </div>
              <div className="price-dostavka">
                <p>Сумма доставки: {item.delivery_price} сум</p>
                <p>Сумма заказа: {item.product_total_sum} сум</p>
                <p>
                  Итог ... {item.delivery_price + item.product_total_sum} сум
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
