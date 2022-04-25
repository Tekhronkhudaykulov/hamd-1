import requests from "../../helpers/requests";

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
