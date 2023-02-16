import 'bootstrap/dist/css/bootstrap.css';
const App = () => { // stateless component
let msg='default data';
  const showMessge=()=>{
    console.log("button clicked..");
    // logic to assign message to a variable
     msg="Hello React JS";
  }

  return (
    <div className='container'>
      <h1>APP Component</h1>
      <hr/>
      <button onClick={()=>showMessge()}>Click Here</button>
      <hr/>
      <h1>{msg}</h1> 
    </div>
  );
};

export default App;