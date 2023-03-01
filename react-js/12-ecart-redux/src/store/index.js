import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
export default store;
