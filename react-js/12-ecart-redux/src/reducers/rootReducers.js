import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer.js';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
  orders:ordersReducer
});
export default rootReducer;
