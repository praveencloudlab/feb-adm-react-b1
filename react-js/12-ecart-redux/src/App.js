import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AddProductForm from './components/AddProductForm';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-9 text-center'>
            <h1>eCart App</h1> 
        </div>
        <div className='col-1 mt-3'>
          <button className='btn btn-primary'>Cart</button>
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