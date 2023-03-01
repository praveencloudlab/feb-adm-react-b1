const initialState = [];
const productsReducer = (state = [], action) => {
  //let{type,payload}=action;
 // console.log(payload);

  switch (action.type) {
    case 'ADD_PRODUCT':
    const { name, price,description } = action.payload; // payload contains product object which comes from a form submit though action
     return [...state, {['id']:state.length+1,name,price,description}];
     //return[...state,action.payload]
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.payload);
      case 'UPDATE_PRODUCT':
        const { payload } = action;
        let obj=state.map(product => product.id === payload.id ? payload :  product);
        return state.map(product => product.id === payload.id ? payload : product);
    default:
      return state;
  }
};
export default productsReducer;
