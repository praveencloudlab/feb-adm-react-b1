import React from 'react';
import ProductTable from './components/ProductTable';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeTable from './components/EmployeeTable';
const App = () => {
  const products=[
    {id:1,name:'Book',price:786},
    {id:2,name:'Laptop',price:10000},
    {id:3,name:'Mouse',price:1232},
    {id:4,name:'Apple',price:3400},
    {id:5,name:'Doll',price:250},
  ]
  return (
    <div className='container'>
      <ProductTable products={products}/>
      <EmployeeTable/>
      
    </div>
  );
};

export default App;