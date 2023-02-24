import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
const ProductForm = (props) => {
    let BASE_URL='http://localhost:8080';
    let{productId}=props;
    const { register, handleSubmit,setValue,reset, formState: { errors } } = useForm();
    const[product,setProduct]=useState({});

    let productUpdate=(product)=>{

    }
    const onSubmit = (data) => {
        
        if(productId){
            axios.put(BASE_URL+`/products/${productId}`,data)
            .then(response => setProduct(response.data))
        }else{
        // if all validations are   successful, then save to server
        axios.post(BASE_URL+'/products',data)
        .then(response=>console.log(response))
        reset({name:'',price:'',description:''})
        }
       // console.log(data);
    }

    useEffect(()=>{
        if(productId){
        axios.get(BASE_URL+`/products/${productId}`)
        .then(response=>{
            const{name,price,description}=response.data;
            setValue('name',name);
            setValue('price',price);
            setValue('description',description);
        })
        
        }
    },[productId,setValue])
  
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
                    <button>{productId?'Update':'Save'}</button>
                </div>
            </form>
            
        </div>
    );
};

export default ProductForm;