import React from 'react';
import emp_data from './Data';
import {useState} from 'react';


const EmployeeTable = () => {
    const[searchTerm,setSearchTerm]=useState("")

    const filteredProducts=emp_data().filter(emp=>{
        return emp.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
     })

    let renderEmployees=()=>{
       // console.log(emp_data());
        return filteredProducts.map((emp,idx)=>{
            return(
                <tr key={idx}>
                <th>{emp.id}</th>
                <th>{emp.first_name}</th>
                <th>{emp.last_name}</th>
                <th>{emp.email}</th>
                <th>{emp.gender}</th>

            </tr>
            )
        })
    }

    const handleChange=(event)=>{
        setSearchTerm(event.target.value);
    }

    return (
        <div>
          
        <input type="text" placeholder="Search Employees" onChange={handleChange}/>
        <br/>
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {renderEmployees()}
            </tbody>
        </table>

            
        </div>
    );
};

export default EmployeeTable;