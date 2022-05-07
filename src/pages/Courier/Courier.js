import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourierImg from "../../assets/img/courier.svg";
import "../../assets/scss/_courier.scss";
import { courierId } from "../../redux/actions/couriersActions";
import { fetchCouriers } from "../../redux/actions/couriersActions";
import CourierComponent from "../../component/Courier/CourierComponent";
const Courier = () => {
  const dispatch = useDispatch();
  const [courerFilter, setCourerFilter] = useState({
    id: "",
  });

  useEffect(() => {
    dispatch(fetchCouriers(courerFilter));
  }, []);

  const cur = useSelector((state) => state.couriers.curiers);

  const addCourier = (item) => {
    const courier = {
      id: item.id,
      name: item.courier.name,
      address: item.address,
      phone: item.courier.phone,
      map_location: item.map_location,
    };
    dispatch(courierId(courier));
  };

  return (
    <div className="couriers">
      <div className="couriers-title">Курьеры:</div>
      <div className="search">
        <CourierComponent
          onChengeSearch={(id) => {
            let newFilter = {
              ...courerFilter,
              id,
            };
            dispatch(fetchCouriers(newFilter));
            setCourerFilter(newFilter);
          }}
        />
      </div>
      <div className="allCurier">
        {cur.length > 0 ? (
          cur.map((item, index) => (
            <div
              className="courier"
              onClick={() => addCourier(item)}
              key={item.id}
            >
              <img src={CourierImg} alt="" />
              <div className="courier-info">
                <p>
                  <span className="k">Курьер:</span>
                  {item?.courier?.name}
                </p>
                <p>
                  <span className="k">ID заказа:</span>#{item.id}
                </p>
                <p>
                  <span className="k">Маршрут:</span>
                  {item.address}
                </p>
                <p>
                  <span className="k">Тел:</span>
                  {item?.courier?.phone}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Такого заказа не существуеть!</p>
        )}
      </div>
    </div>
  );
};

export default Courier;
