import { addProduct, removeProduct,updateProduct } from '../actions/productsActions';
export function addNewProduct(dispatch, product) {
  
    dispatch(addProduct(product));  // actions :: addProduct

}

export function removeExistingProduct(dispatch, product) {
  dispatch(removeProduct(product)); // actions :: removeProduct
}

export function updateProduct(dispatch, product) {
    dispatch(updateProduct(product)); // actions :: updateProduct
  }
  