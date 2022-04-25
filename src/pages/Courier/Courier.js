import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourierImg from "../../assets/img/courier.svg";
import "../../assets/scss/_courier.scss";
import { courierId } from "../../redux/actions/courierIdActions";
import { fetchCouriers } from "../../redux/actions/couriersActions";
import CourierComponent from "../../component/Courier/CourierComponent";
import ButtonLoadingComponent from "../../element/Button/ButtonLoadingComponent";
const Courier = () => {
  const dispatch = useDispatch();
  const [courerFilter, setCourerFilter] = useState({
    search: "",
    status: 2,
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
          onChengeSearch={(search) => {
            let newFilter = {
              ...courerFilter,
              search,
            };
            dispatch(fetchCouriers(newFilter));
            setCourerFilter(newFilter);
          }}
        />
      </div>
      <div className="allCurier">
        {cur.map((item, index) => (
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
                <span className="k">Fone:</span>
                {item?.courier?.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courier;
