import requests from "../../helpers/requests";

export const fetchNewOrders = (params) => (dispatch) => {
  dispatch({ type: "fetch_new_orders_start", payload: params });

  requests
    .fetchNewOrders(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_new_orders_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Error values";
      dispatch({ type: "fetch_new_orders_error", payload: message });
    });
};

export const fetchMap =
  ({ address, coordinates }) =>
  (dispatch) => {
    dispatch({
      type: "fetch_Map",
      payload: {
        address,
        coordinates,
      },
    });
  };
