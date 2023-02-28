import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { useSelector, useDispatch } from 'react-redux';
import Summary from './components/Summary';

const App = () => {
  const count   = useSelector(state => state.count); // calls action
  //const prod    = useSelector(state => state.product);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' }); // call reducer
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };


  return (
    <div className='container'>

      <h1>APP Component</h1> <hr/>

      <h1>Count : {count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>


      <hr/>
      <Summary/>

    
    </div>
  );
};

export default App;