import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Greeting(props){
  let {name,mySkills,employee}=props;
  return(
  <div>
      <h1>Greeting Component</h1> <hr/>
      <h2>Hello {name}</h2> <hr/>
      <h2>{mySkills}</h2>
      <h2>{JSON.stringify(employee)}</h2>
   </div>
   )
}
const App = (props) => {
   
  let[message,setMessage] = useState('Default message');
  let[childMsg,setChildMsg] = useState('');


  let handleMessage=(msg)=>{
    setMessage(msg);
  }




  let city="Hyderabad";
  let emp={"id":1024,"name":"Praveen","salary":394794}
  let skills=['Javascript','Java','Spring','Microservices'];

  let persons=[
    {id:10,name:'Praveen',age:76},
    {id:11,name:'Kavya',age:54},
    {id:12,name:'Ramesh',age:45}
  ]

  let testFun=(childMsg)=>{
    console.log(">>> App Component testFun called...");
    console.log(childMsg);
    setChildMsg(childMsg); 
  }

  let displayPerson=()=>{
    return persons.map((person,idx)=>{
        return(
          <tr key={idx}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
          </tr>
        )
    });

    

  }


  return (
    <div className='container'>
      <h1>{props.title}</h1> <hr/>
      <table className='table table-bordered'>
           
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        
        <tbody>
          {displayPerson()}
        </tbody>
      </table>
      {!true? <Greeting name="Praveen" cityName={city} employee={emp} mySkills={skills}/>:null}

      <button onClick={()=>handleMessage('Good Morning')} className='btn btn-primary btn-space'>Good Morning</button>
      <button onClick={()=>handleMessage('Good Noon')} className='btn btn-primary btn-space'>Good Noon</button>
      <button onClick={()=>handleMessage('Good Evening')} className='btn btn-primary btn-space'>Good Evening</button>
      <button onClick={()=>handleMessage('Good Night')} className='btn btn-primary btn-space'>Good Night</button>
      <h2>Child Component Message: {childMsg}</h2>
      <hr/>

      <Product greetMsg={message}  testFun={testFun} / >

    </div>
  );
};
let Product=(props)=>{

   function greetBack(msg){
      console.log(">>> child component");
      props.testFun(msg);
   }

  return(
    <div>
      <h1>Product Component</h1> <hr/>
      <h3>Message: {props.greetMsg}</h3>
      <hr/>
      <button onClick={()=>greetBack(props.greetMsg)} className='btn btn-success'>Greet Back</button>
    </div>
  )
}
export default App;