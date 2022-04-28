import requests from "../../helpers/requests";
import { foodsClearOrder } from "../../redux/actions/foodsActions";

export const fetchNewOrders = (params) => (dispatch) => {
  dispatch({ type: "fetch_new_orders_start", payload: params });
  dispatch(foodsClearOrder());
  requests
    .fetchNewOrders(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_new_orders_success", payload: data });
      window.location.reload();
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Error values";
      dispatch({ type: "fetch_new_orders_error", payload: message });
      alert("заказ не принять");
    });
};
