import requests from "../../helpers/requests";

export const fetchCouriers = (params) => (dispatch) => {
  dispatch({ type: "fetch_couriers_start", payload: params });

  requests
    .fetchCouriers(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_couriers_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "fetch_couriers_error", payload: message });
    });
};

export const courierId = (id) => (dispatch) => {
  dispatch({
    type: "couriers_start",
    payload: id,
  });
};
