import 'bootstrap/dist/css/bootstrap.css';
import Even from './componets/Even';
import Odd from './componets/Odd';
import greetMe from './js/Test';
import Validate from './js/Validate';

const App = () => {
let obj=Validate();
 let name='Praveen';
 let date=new Date().toLocaleTimeString('en-US',{timeZone:'asia/kolkata'});

 let sum=(a,b)=>a+b;
 let sayName=()=>"your name is some thing..."
 let evenorOdd=(num)=>num%2;




  return ( // do not add any javascript code in retrn statement. It shoud have only JSX template
    <div className="container">
      <h1>APP Component</h1><hr/>
      <h4>Name: {name} - {date} </h4>
      <h4>Sum: {sum(100,200)}</h4>
      <h4>{sayName()}</h4>
      <h4>result: {evenorOdd(17)}</h4>
      <hr/>
      {evenorOdd(177)===0? <Even/>:<Odd/>}
      <hr/>
      <h3>{greetMe('Praveen')}</h3>

      <hr/>
      {obj.numValidate(848347)}
      <br/>
      {obj.emailValidate('abc2abc.com')}
    </div>
  );
};

export default App;