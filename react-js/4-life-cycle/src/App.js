import React from 'react';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
   
  let[oddCount,setOddCount]=useState(1);
  let[evenCount,setEvenCount]=useState(0);

  
  function evenIncrement(){
    setEvenCount(evenCount+=2)  // component is re-rendered when ever setname is called...
  }

  function evenDecrement(){
    setEvenCount(evenCount-=2) // component is re-rendered when ever setname)
  }

  function oddIncrement(){
    setOddCount(oddCount+=2)  // component is re-rendered when ever setname is called...
}

function oddDecrement(){
  setOddCount(oddCount-=2) // component is re-rendered when ever setname)
}

  /*
  useEffect(()=>{ // component­Did­Update
    console.log("component­Did­Update");
  });
  */

  useEffect(()=>{
    console.log(">>> every time when ever or odd udated");
  },[evenCount,oddCount])
  
  useEffect(()=>{ // component­Did­Mount
    console.log("component­Did­Mount");
  },[]);



  function test(){
    console.log(">> testing...");
  }
  return (
    <div className='container'>

      <h1>Life Cycle Hooks</h1> <hr/>

      <h1>Even Counter: {evenCount}</h1>
      <h1>Odd Counter: {oddCount}</h1>

      <button onClick={()=>evenIncrement()}>Even No Increment</button>
      <button onClick={()=>evenDecrement()}>EVen No Decrement</button>

      <br/>

      <button onClick={()=>oddIncrement()}>Odd No Increment</button>
      <button onClick={()=>oddDecrement()}>Odd No Decrement</button>

      <button onClick={()=>test()}>Test Me</button>

      
    </div>
  );
};

export default App;