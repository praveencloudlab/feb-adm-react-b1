import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductSearchForm from './components/ProductSearchForm';


const App = () => {
  const[productId,setProductId] =useState();
  return (
    <div className='container'>

      <h1>APP Component</h1> <hr/>
      {!true?<Products/>:null} 
      {!true?<ProductForm/>:null} 
      {!true?<ProductSearchForm/>:null}

      <input placeholder='Product ID' onChange={(e)=>setProductId(e.target.value)}/>
      <br/>
      <br/>

      <div>
        <div className='row'>
          <div className='col-3'>
          {productId?  <ProductForm productId={productId}/>:<ProductForm/>}
          </div>
          <div className='col-9'>
          <Products/>
          </div>
        </div>
      </div>

      
    
      
    </div>
  );
};

export default App;