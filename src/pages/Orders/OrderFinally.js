import React, { useState } from "react";
import "../../assets/scss/_orders.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../../element/Button/Button";
import PhoneInput from "react-phone-input-2";
import { PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons";
import MapPayment from "../Map/MapPayment";
import AllSuma from "../../component/Orders/AllSuma";

const OrderFinally = () => {
  const [modal, setModal] = useState(false);
  const ToggleSwtich = () => {
    modal ? setModal(false) : setModal(true);
  };
  return (
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
              />
            </div>
            <div>
              <TextField
                disabled
                id="outlined-required"
                label="Самарканд"
                placeholder="Самарканд"
                name="city"
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
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Ориентир"
                placeholder="Ориентир"
                name="reference_point"
              />
            </div>
            <div>
              <TextField
                disabled
                id="outlined-required"
                label="Филлиал Самарканда"
                placeholder="Филлиал Самарканда"
                name="reference_point"
              />
            </div>
            <div>
              <TextField
                disabled
                id="outlined-required"
                label="Доставка"
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
              />
            </div>
            {modal ? (
              <div className="phone-1">
                <PhoneInput
                  country={"uz"}
                  name="phone1"
                  defaultMask={"(..) ...-..-.."}
                  alwaysDefaultMask={true}
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
      <AllSuma />
    </div>
  );
};

export default OrderFinally;
