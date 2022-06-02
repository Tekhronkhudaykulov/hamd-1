const INITIAL_STATE = {
  orders: [],
  loading: false,
  message: null,
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

    // Create Order
    // case "create_order_start":
    //   return {
    //     ...state,
    //     message: "",
    //     loading: true,
    //   };
    // case "create_order_error":
    //   return {
    //     ...state,
    //     message: payload,
    //     loading: false,
    //   };
    // case "create_order_success":
    //   // const newList = [...state.orders, payload.data && payload.data];
    //   return {
    //     ...state,
    //     message: payload.message,
    //     orders: [...state, payload.data],
    //     loading: false,
    //   };
    default:
      return state;
  }
};
