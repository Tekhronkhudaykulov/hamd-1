const INITIAL_STATE = {
  curiers: [],
  list: [],
  loading: false,
  token: null,
  message: null,
  data: {},
  userInfo: {},
  courier: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "fetch_couriers_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "fetch_couriers_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "fetch_couriers_success":
      return {
        ...state,
        message: payload.message,
        curiers: payload.data,
        loading: false,
      };
    case "couriers_start":
      return {
        ...state,
        courier: payload,
      };
    default:
      return state;
  }
};
