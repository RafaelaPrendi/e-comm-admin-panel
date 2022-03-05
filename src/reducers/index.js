import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import registerReducer from "./register.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import orderReducer from "./order.reducer";

const rootReducer = combineReducers({
    auth : authReducer,
    newUser: registerReducer,
    product: productReducer,
    category: categoryReducer,
    order: orderReducer
})
export default rootReducer;