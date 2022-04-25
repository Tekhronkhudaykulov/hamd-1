import requests from "../../helpers/requests";
export const authLogin = (params) => (dispatch) => {
  dispatch({ type: "auth_login_start", payload: params });

  requests
    .authLogin(params)
    .then(({ data }) => {
      dispatch({ type: "auth_login_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "auth_login_error", payload: message });
    });
};
