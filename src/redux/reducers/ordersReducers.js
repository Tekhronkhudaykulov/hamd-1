const INITIAL_STATE = {
  curiers: [],
  orders: [],
  list: [],
  loading: false,
  token: null,
  message: null,
  data: {},
  userInfo: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "fetch_orders_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "fetch_orders_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "fetch_orders_success":
      return {
        ...state,
        message: payload.message,
        orders: payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
