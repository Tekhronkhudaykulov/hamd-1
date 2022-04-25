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
    case "fetch_category_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "fetch_category_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "fetch_category_success":
      return {
        ...state,
        message: payload.message,
        list: payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
