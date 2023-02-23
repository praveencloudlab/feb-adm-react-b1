import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
const ProductForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // if all validations are   successful, then save to server
        axios.post('http://localhost:8080/api/products',data)
        .then(response=>console.log(response))
       // console.log(data);
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
                    <input 
                    placeholder='Price'
                    name="price"
                    {...register("price",{ required: true })}
                    />
                    <span>
                    {errors.price?.type === 'required' && <p role="alert">Price  is required</p>}
                    </span>
                    </div>
                

                <div>
                    <textarea 
                    placeholder='Product Description'
                    name="description"
                    {...register("description",{ required: true })}></textarea>
                    <span>
                    {errors.description?.type === 'required' && <p role="alert">Description is required</p>}
                    </span>
                    
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
            
        </div>
    );
};

export default ProductForm;