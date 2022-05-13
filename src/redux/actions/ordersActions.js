import requests from "../../helpers/requests";
import { foodsClearOrder } from "../../redux/actions/foodsActions";

export const fetchOrders = (params) => (dispatch) => {
  dispatch({ type: "fetch_orders_start", payload: params });
  requests
    .fetchOrders(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_orders_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "fetch_orders_error", payload: message });
    });
};

export const fetchNewOrders = (params) => (dispatch) => {
  dispatch({ type: "create_order_start", payload: params });
  dispatch(foodsClearOrder());
  requests
    .fetchNewOrders(params)
    .then(({ data }) => {
      dispatch({ type: "create_order_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Error values";
      dispatch({ type: "create_order_error", payload: message });
    });
};
