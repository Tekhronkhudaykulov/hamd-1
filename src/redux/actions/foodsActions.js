import requests from "../../helpers/requests";

export const fetchFoods = (id) => (dispatch) => {
  dispatch({ type: "fetch_foods_start", payload: id });

  requests
    .fetchFoods(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_foods_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "fetch_foods_error", payload: message });
    });
};

export const foodsListAdd = (id, name, amount, price) => (dispatch) => {
  dispatch({ type: "fods_list_add", payload: id, name, amount, price });
};

export const foodsCountChange = (product) => (dispatch) => {
  dispatch({ type: "count_change", payload: product });
};

export const foodsClearOrder = () => (dispatch) => {
  dispatch({ type: "clear_order" });
};

export const deleteFood = (id) => (dispatch) => {
  dispatch({ type: "delete_food", payload: id });
  console.log(id, "adsadasdsa");
};
