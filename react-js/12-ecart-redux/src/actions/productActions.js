export const addProduct = (product) => (
{ type: 'ADD_PRODUCT', payload: product }); // calls reducer ==> ADD_PRODUCT is action name
export const deleteProduct = (product) => (
    { type: 'DELETE_PRODUCT', payload: product });
export const updateProduct = (product) => (
    { type: 'UPDATE_PRODUCT', payload: product });


/*
    actions always takes/dispatches to reducers...
**/

