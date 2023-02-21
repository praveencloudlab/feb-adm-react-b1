import React from 'react';
import {useState} from 'react';

const RegForm = () => {
    const[user,setUser]=useState({});
    let handleUser=(event)=>{
        const { name, value } = event.target;
        setUser({...user,[name]: value});
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        // validations
        //send object tobacnk end api server
        console.log(JSON.stringify(user));
    }

    return (
        <div>

            <h1>registration form</h1> <hr/>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>First name</label>
                    <input type="text"
                    name='firstName'
                    placeholder='First Name'
                    onChange={(e)=>handleUser(e)}
                    /> 
                </div>

                <div>
                    <label>Last name</label>
                    <input type="text"
                    name='LastName'
                    placeholder='Last Name'
                    onChange={(e)=>handleUser(e)}
                    /> 
                </div>

                <div>
                    <label>Email name</label>
                    <input type="text"
                    name='email'
                    placeholder='Email'
                    onChange={(e)=>handleUser(e)}
                    /> 
                </div>

                <div>
                    <button>Submit</button>
                </div>

            </form>

            <hr/>

            <h3>User: {JSON.stringify(user)}</h3>


            
        </div>
    );
};

export default RegForm;