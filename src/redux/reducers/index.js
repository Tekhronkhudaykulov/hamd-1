import { combineReducers } from "redux";
import couriersReducers from "./couriersReducers";
import foodsReducers from "./foodsReducers";
import menuCategoryReducers from "./menuCategoryReducers";
import ordersReducers from "./ordersReducers";
import userReducers from "./userReducers";

const reducer = combineReducers({
  user: userReducers,
  category: menuCategoryReducers,
  foods: foodsReducers,
  couriers: couriersReducers,
  orders: ordersReducers,
});

export default reducer;
