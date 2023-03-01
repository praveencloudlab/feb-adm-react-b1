import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';


const CartItems = (props) => {
    let { product } = props;

    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product)); // dispatch to action => from there to a cartreducer

    };
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>&#8377;{product.price}</td>
            <td>&#8377;{product.price * product.quantity}</td>
            <td><button onClick={handleRemoveFromCart}>Remove</button></td>
        </tr>
    );
};

export default CartItems;