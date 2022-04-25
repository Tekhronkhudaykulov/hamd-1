export const courierId = (id) => (dispatch) => {
  dispatch({
    type: "couriers_start",
    payload: id,
  });
};
