import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions';


const AddProductForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products); // state is updated by reducer, and updated data comes here

    const onSubmit = (product) => {
        console.log(product);
        dispatch(addProduct(product)); //action ...>> addProdct
    };


    return (
        <div>
            <h1>Product Form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder='Product Name'
                        name='name'
                        {...register('name', { required: true })}
                    />
                    <span>
                        {errors.name && <span>Product Name is required</span>}
                    </span>
                </div>
                <div>
                    <input placeholder='Product Price'
                        name='price'
                        {...register('price', { required: true })}
                    />
                    <span>
                        {errors.price && <span>Product Price is required</span>}
                    </span>
                </div>

                <div>
                    <textarea placeholder='Description'
                        name='description'
                        {...register('description', { required: true })}
                    />
                    <span>
                        {errors.description && <span>Product Description is required</span>}
                    </span>
                </div>
                <button type="submit">Add Product</button>
            </form>

            <hr/>

            <h3>
                {JSON.stringify(products)}
            </h3>




        </div>
    );
};

export default AddProductForm;