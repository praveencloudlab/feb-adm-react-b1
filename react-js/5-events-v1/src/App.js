import React from 'react';

const App = () => {

 const f1=(s1)=>{
  console.log(">> I am function1 :: "+s1);
 }

 const f2=()=>{
  console.log(">> I am function2");
 }

 const f3=()=>{
  console.log(">> I am function3");
 }

  return (
    <div>

      <h1>Event Testing APP</h1> <br/>
      
      <button onClick={()=>f1('hey I am Praveen')}>Function1</button>
      <button onClick={f2}>Function2</button>
      <button onClick={f3}>Function3</button>


      
    </div>
  );
};

export default App;