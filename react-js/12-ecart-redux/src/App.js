import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AddProductForm from './components/AddProductForm';

import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
const App = () => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-9 text-center mt-2'>
            <h1>eCart App</h1> 
        </div>
        <div className='col-1 mt-3'>
        <button type="button" className="btn btn-primary position-relative">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <b>{cartItems.length}</b>
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>

        </div>
        <div className='col-1 mt-3'>
          <button className='btn btn-primary'>Login</button>
        </div>
    </div>
    <hr/>

    <div className='row'>
        <div className='col-3'>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="products">Products</Link>
              </li>
              <li>
                <Link to="cart">Cart</Link>
              </li>
              <li>
                <Link to="add-product">Add Product</Link>
              </li>
            </ul>
          </nav>

        </div>
        <div className='col-9'>

        <Routes>
          <Route path="/" element={<ProductList />} />
            <Route path="add-product" element={<AddProductForm />} />
            <Route path="products" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
          </Routes>


        </div>

    </div>

      
      
    </div>
  );
};

export default App;