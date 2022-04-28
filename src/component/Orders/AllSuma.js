import React, { useState } from "react";
import "../../assets/scss/_orders.scss";
import FinishOrders from "./FinishOrders";

const AllSuma = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="allSumma" onClick={() => setModalOpen(true)}>
        <p>Подвердить</p>
      </div>
      {modalOpen && <FinishOrders data={data} setOpenModal={setModalOpen} />}
    </>
  );
};

export default AllSuma;
