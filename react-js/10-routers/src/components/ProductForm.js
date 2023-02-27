import React, { useState,useEffect } from 'react';
import{useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import ProductService from '../api-services/ProductService';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';

const ProductForm = (props) => {
  const{id}=useParams();
  console.log("ID: "+id);

    const{register,handleSubmit,reset,formState:{errors}}=useForm();
    const[product,setProduct]=useState({});
    const navigate=useNavigate();

    if(!id){
      //  reset({name:'',price:'',description:''})

    }

  useEffect(()=>{
    if(id){
        ProductService.findProduct(id)
        .then(response=>setProduct(response.data))
    }else{
        console.log(">>> new ");
    }
  },[])

    const onSubmit = (product) =>{
        if(id){
            console.log(">>>> Edit");
            ProductService.updateProduct(product,id);
            navigate('/products');
           
        }else{
            console.log(">>>> SAVE");
            ProductService.addProduct(product)
            .then(response=>setProduct(response.data))
            navigate('/products');  
        }
      
    }

    return (
        <div>
            <h1>Product Form</h1> <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('name',{required:true})}
                         placeholder='Product Name'
                         defaultValue={product.name}
                         />
               <span>{errors.name && <span>Name is Required</span>}</span>
            </div>

            <div>
                <input {...register('price',{required:true})}
                        
                         placeholder='Product Price'
                         defaultValue={product.price}
                         />
               <span>{errors.price && <span>Price is Required</span>}</span>
            </div>

            <div>
                <textarea {...register('description',{required:true})}
                         placeholder='Description'
                         defaultValue={product.description}
                         />
               <span>{errors.description && <span>Description is Required</span>}</span>
            </div>
            <div>
                <button>{id?'Update':'Save'}</button>
            </div>
            </form>


        </div>
    );
};

export default ProductForm;