import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {

    const products = useSelector(state => state.products); // gets from store
    //const orders = useSelector(state => state.orders); // gets from store



    let renderProducts = () => {
        return products.map(product => {
            return (
                <ProductItem key={product.id} product={product} />
            )
        })
    }

    return (
        <div>
            <h1>Product List</h1>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProducts()}
                </tbody>
            </table>



            <hr />


        </div>
    );
};

export default ProductList;