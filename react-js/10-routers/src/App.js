import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductForm from './components/ProductForm';
import PageNotFound from './components/PageNotFound';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';


const App = () => {
  return (
    
    <div className='container'>

      <h1 className='text-center'>
        eCart App
      </h1>
      <hr/>
      <div className='row'>
        <div className='col-3'>
      <Link to="/">Home</Link> <br/>
      <Link to="products">View Products</Link> <br/>
      <Link to="addproduct">Add Product</Link> <br/>


        </div>

        <div className='col-9'>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="products" element={ <ProductList/> } />
        <Route path="addproduct" element={ <ProductForm/> } />
        <Route path="addproduct/:id" element={ <ProductForm/> } />
        <Route path="editproduct" element={ <EditProduct/> } />
        <Route path="editproduct/:id" element={ <EditProduct/> } />
        <Route path="*" element={ <PageNotFound/> } />


      </Routes>
          
       
        </div>

      </div>


      
    </div>
  );
};

export default App;