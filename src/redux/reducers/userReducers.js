const INITIAL_STATE = {
  list: [],
  loading: false,
  token: null,
  message: null,
  data: {},
  userInfo: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "auth_login_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "auth_login_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "auth_login_success":
      window.localStorage.setItem("@token", payload.token);
      return {
        ...state,
        message: payload.message,
        token: payload.token,
        loading: false,
      };
    default:
      return state;
  }
};
