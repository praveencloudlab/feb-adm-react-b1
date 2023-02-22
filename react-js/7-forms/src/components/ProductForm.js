import React from 'react';
import { useForm } from "react-hook-form";

const ProductForm = () => {
 const { register, handleSubmit,formState: { errors } } = useForm();
  const productForm = (product) =>{
    console.log(product);
  } 
    return (
        <div>
            <h1>Product Form</h1> <hr/>
            <form onSubmit={handleSubmit(productForm)}>
            <div>
            <input  {...register("name",{required:true})} placeholder='Product Name' />
            <span>
            {errors.name?.type==='required' && <span className='text-danger'>Product Name is Required</span>}

            </span>
            </div>
            <div>
            <input  {...register("price",{ required: true, min: 1, max: 100000000  })} placeholder='Price'/>
           <span>
            {errors.price?.type==='required' && <span className='text-danger'>Price is required</span>}
            {errors.price?.type==='min' && <span className='text-danger'>Price should be minimum 1</span>}
            {errors.price?.type==='max' && <span className='text-danger'>Price should be maxium 100000000</span>}
            </span>
            </div>

            <div>
                <input 
                    {...register("email",{ required: true,pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                    type="text" 
                    placeholder="Email" 
                    name="email"/>
                    <span>
                    {errors.email?.type==='required' && <span className='text-danger'>Email is required</span>} 
                    {errors.email?.type==='pattern' && <span className='text-danger'>Invalid Email</span>} 
                    </span>
            </div>
            <input type="submit" />
            </form>

            

        </div>
    );
};

export default ProductForm;