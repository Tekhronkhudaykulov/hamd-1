const INITIAL_STATE = {
  courier: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "couriers_start":
      return {
        ...state,
        courier: payload,
      };
    default:
      return state;
  }
};
