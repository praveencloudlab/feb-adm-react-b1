import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions'
import { updateProduct } from '../actions/cartActions'



const ProductItem = (props) => {
    let { product } = props;
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        const updatedProduct = { ...product, inCart: true };
        console.log(updatedProduct);
        dispatch(addToCart(updatedProduct));// dispatch alwasy dispatches to action : addTocart
    };


    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td><button onClick={handleAddToCart}>Add to Cart</button></td>
        </tr>
    );
};

export default ProductItem;