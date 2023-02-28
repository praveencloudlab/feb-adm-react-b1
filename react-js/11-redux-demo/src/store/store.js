import { configureStore } from '@reduxjs/toolkit';
const initialState = { count: 0};

function counterReducer(state = initialState, action) {
    
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = configureStore({ reducer: counterReducer });

export default store;