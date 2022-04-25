const INITIAL_STATE = {
  loading: false,
  message: null,
  mapValues: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "fetch_new_orders_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "fetch_new_orders_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "fetch_new_orders_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    case "fetch_Map":
      return {
        ...state,
        mapValues: payload,
      };
    default:
      return state;
  }
};
