import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './components/Employee';
import Greet from './components/Greet';
const App = () => { 
  return (
    <div className="container">
        <h1>APP Component </h1>
        <hr/>

        <Greet/>
        

    </div>
  );
};

export default App;