import React, { useEffect, useState } from "react";
import "../../assets/scss/_orders.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../../element/Button/Button";
import PhoneInput from "react-phone-input-2";
import { PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons";
import MapPayment from "../Map/MapPayment";
import AllSuma from "../../component/Orders/AllSuma";
import { useSelector } from "react-redux";
const OrderFinally = () => {
  const [data, setData] = useState({});
  const [modal, setModal] = useState(false);
  const ToggleSwtich = () => {
    modal ? setModal(false) : setModal(true);
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.house]: e.target.value,
      [e.target.entrance]: e.target.value,
      [e.target.floor]: e.target.value,
      [e.target.flat]: e.target.value,
      [e.target.reference_point]: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setData({ ...data, phone: e });
  };
  const handlePhone1 = (e) => {
    setData({ ...data, phone1: e });
  };

  return (
    <>
      <div className="order-finally">
        <p className="dostavka">Доставка</p>
        <div className="order-button">
          <Button />
        </div>
        <div className="order-map">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            Validate
            autoComplete="off"
          >
            <div className="all-form">
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Имя"
                  placeholder="Имя"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  disabled
                  id="outlined-required"
                  label="Самарканд"
                  placeholder="Самарканд"
                  name="city"
                  value={data.strana}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Улица"
                  placeholder="Улица"
                  name="street"
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Дом"
                  placeholder="Дом"
                  name="home"
                  value={data.house}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Подьезд"
                  placeholder="Подьезд"
                  name="entrance"
                  type={"number"}
                  value={data.entrance}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Этаж"
                  placeholder="Этаж"
                  name="floor"
                  type={"number"}
                  onChange={handleChange}
                  value={data.floor}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="кв"
                  placeholder="кв"
                  name="flat"
                  type={"number"}
                  value={data.flat}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Ориентир"
                  placeholder="Ориентир"
                  name="reference_point"
                  value={data.reference_point}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  disabled
                  id="outlined-required"
                  label="Филлиал "
                  placeholder=" Самарканда"
                  name="reference_point"
                />
              </div>
              <div>
                <TextField
                  disabled
                  id="outlined-required"
                  label="Тип заказа"
                  placeholder="Доставка"
                  name="reference_point"
                />
              </div>
              <div className="phone">
                <PhoneInput
                  country={"uz"}
                  name="phone"
                  defaultMask={"(..) ...-..-.."}
                  alwaysDefaultMask={true}
                  onChange={handlePhone}
                  value={data.phone}
                />
              </div>
              {modal ? (
                <div className="phone-1">
                  <PhoneInput
                    country={"uz"}
                    name="phone1"
                    defaultMask={"(..) ...-..-.."}
                    alwaysDefaultMask={true}
                    onChange={handlePhone1}
                    value={data.phone1}
                  />
                </div>
              ) : null}
              <div className="icon">
                {modal ? (
                  <MinusSquareOutlined
                    className="icon-plus"
                    onClick={ToggleSwtich}
                  />
                ) : (
                  <PlusSquareOutlined
                    className="icon-plus"
                    onClick={ToggleSwtich}
                  />
                )}
              </div>
            </div>
          </Box>
          <MapPayment />
        </div>
      </div>
      <AllSuma />
    </>
  );
};

export default OrderFinally;
