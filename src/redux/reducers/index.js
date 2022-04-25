import { combineReducers } from "redux";
import courierIdReducers from "./courierIdReducers";
import couriersReducers from "./couriersReducers";
import foodsReducers from "./foodsReducers";
import menuCategoryReducers from "./menuCategoryReducers";
import newOrdersReducers from "./newOrdersReducers";
import ordersReducers from "./ordersReducers";
import userReducers from "./userReducers";

const reducer = combineReducers({
  user: userReducers,
  category: menuCategoryReducers,
  foods: foodsReducers,
  couriers: couriersReducers,
  orders: ordersReducers,
  courierId: courierIdReducers,
  newOrders: newOrdersReducers,
});

export default reducer;
