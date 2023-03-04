import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { emptyCart, removeFromCart } from '../actions/cartActions';
import CartItems from './CartItems';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    let renderCartItems = () => {
        return cartItems.map(product => {
            return (
                <CartItems key={product.id} product={product} />
            )
        })
    }

    const handleClearCart = () => {
        dispatch(emptyCart());
      };


    return (
        <div>
            <div className='row'>
                <div className='col-5'>
                    <h2>Cart</h2>
                </div>
                <div className='col-7'>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </div>
            </div>
            <hr/>

        <div className='row'>
            <div className='col-8'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>

                    </tr>
                </thead>
                <tbody>
                    {renderCartItems()}
                    <tr>
                    <td></td>
                    <th></th>
                    <td><br/>Total Cart</td>
                    <td><br/> <b>&#8377;{cartTotal}</b></td>
                </tr>
                </tbody>

               
            </table>
            </div>
            <div className='col-4'>
                <div className='card bg-info'>
                    
                    <div className='card-body'>
                        <h6>Sub total ({cartItems.length}) items</h6>
                        <h3>&#8377;{cartTotal.toLocaleString(undefined, {maximumFractionDigits:2})}</h3>
                        <hr/>
                        <button>Make Payment</button>
                        
                    </div>
                </div>
               
            </div>

        </div>

            
            <hr />


        </div>
    );
};

export default Cart;