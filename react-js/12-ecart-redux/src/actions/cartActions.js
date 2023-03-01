export const addToCart = (product) => ({ type: 'ADD_TO_CART', payload: product }); // goes to reducer
export const removeFromCart = (product) => ({ type: 'REMOVE_FROM_CART', payload: product });
export const emptyCart = () => ({ type: 'EMPTY_CART' });
