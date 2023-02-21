import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import RegForm from './components/RegForm';
import ProductForm from './components/ProductForm';

const App = () => {


  return (
    <div className='container'>


     {!true?<RegForm/>:null} 

     <ProductForm/>


       
    </div>
  );
};

export default App;