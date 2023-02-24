import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Product from './Product';


const Products = () => {

    let BASE_URL='http://localhost:8080';

    const[products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get(BASE_URL+'/products')
        .then(response =>setProducts(response.data))
        .catch(error=>console.error(error))
    },[])


    let renderProducts = () =>{
        return products.map((product,idx) =>{
            return(
                <Product product={product} key={idx}/>
            )
        })
    }


    return (
       
          <table className='table'>
           
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    </tr>
                </thead>
            
            <tbody>
            {renderProducts()}
            </tbody>
          </table>
            
        
    );
};

export default Products;