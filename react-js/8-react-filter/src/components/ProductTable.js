import React from 'react';
import {useState} from 'react';
const ProductTable = (props) => {
    let{products}=props;

    const[searchTerm,setSearchTerm]=useState("")
    const[sortBy,setSortBy]=useState("");
    const[sortOrder,setSortOrder]=useState("");

    const handleChange=(event)=>{
        setSearchTerm(event.target.value);
    }

    const handleSort=(colum)=>{
        if(colum===sortBy){
            setSortOrder(sortOrder==="asc" ? "desc" : "asc");
        }else{
            setSortBy(colum);
            setSortOrder("asc");
        }
    }

    const sortedProducts=products.sort((a,b)=>{
        if(sortBy==="name"){
            return sortOrder==="asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }else if(sortBy=="price"){
            return sortOrder==="asc" ? a.price-b.price:b.price-a.price;
        }
        return 0;
    })


    const filteredProducts=products.filter(product=>{
       return product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    const renderProducts=()=>{
        return filteredProducts.map((product,idx)=>{
            return(
                <tr key={idx}>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                </tr>
            )
        })
    }

   
    

    return (
        <div>
          
        <input type="text" placeholder="Search Products" onChange={handleChange}/>
        <br/>
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {renderProducts()}
            </tbody>
        </table>

            
        </div>
    );
};

export default ProductTable;