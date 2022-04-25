const INITIAL_STATE = {
  list: [],
  loading: false,
  token: null,
  message: null,
  data: {},
  userInfo: {},
  meals_fods: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "fetch_foods_start":
      return {
        ...state,
        message: "",
        loading: true,
      };

    case "fetch_foods_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };

    case "fetch_foods_success":
      return {
        ...state,
        message: payload.message,
        list: payload.data,
        loading: false,
      };

    case "fods_list_add":
      const meals = state.meals_fods.map((item) => {
        if (item.id == payload.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });

      if (meals.find((item) => item.id == payload.id) == undefined) {
        meals.push(payload);
      }
      return {
        ...state,
        meals_fods: [...meals],
      };

    case "count_change":
      let { id, node } = payload;
      return {
        ...state,
        meals_fods: state.meals_fods.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              amount: item.amount + node,
            };
          }
          return item;
        }),
      };

    case "clear_order":
      return {
        ...state,
        meals_fods: [],
      };

    default:
      return state;
  }
};
