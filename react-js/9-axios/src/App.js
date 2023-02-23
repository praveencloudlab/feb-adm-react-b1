import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductSearchForm from './components/ProductSearchForm';


const App = () => {
  return (
    <div className='container'>

      <h1>APP Component</h1> <hr/>

      {!true?<Products/>:null} 
      {!true?<ProductForm/>:null} 
      <ProductSearchForm/>
      
    </div>
  );
};

export default App;