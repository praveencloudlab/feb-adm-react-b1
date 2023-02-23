import React,{useState,useEffect} from 'react';
import axios from 'axios';

import {useForm} from 'react-hook-form';
import Product from './Product';
const ProductSearchForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [products,setProducts]=useState([])
    const[showData,setShowData] =useState(false);
    const onSubmit = (data) => {
        axios.get(`http://localhost:8080/api/products/filter/${data.name}`)
        .then(response=>setProducts(response.data))
        .catch(error=>console.log(error));
        setShowData(true);
    }


    let renderProducts=() => {
        console.log(">>>> helloooo");
        console.log(showData);
        console.log(products);
        return products.map((product,idx)=>{
            console.log(product);
            return(
                <Product product={product} key={idx}/>
            )
        })
    }
    return (

        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                    <input 
                    placeholder='Product Name'
                    name="name"
                    {...register("name",{ required: true })}
                    />
                    <span>
                    {errors.name?.type === 'required' && <p role="alert">Name  is required</p>}
                    </span>
                    </div>

                    <div>
                        <button>Search</button>
                    </div>
                    </form>

                    <hr/>
                    {showData? <table className='table'>
           
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
     </table>:''}
        </div>
    );
};

export default ProductSearchForm;