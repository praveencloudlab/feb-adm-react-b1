const initialState = {
    orderID: '2012ABC937333',
    orderDate: new Date().toLocaleDateString(),
    userId:1024,
    isShipped: false,
  };
   const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_ORDERS':
        return {
         ...state
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  export default ordersReducer;