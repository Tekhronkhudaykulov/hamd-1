import requests from "../../helpers/requests";

export const fetchCategory = () => (dispatch) => {
  dispatch({ type: "fetch_category_start" });

  requests
    .fetchCategory()
    .then(({ data }) => {
      dispatch({ type: "fetch_category_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "fetch_category_error", payload: message });
    });
};
