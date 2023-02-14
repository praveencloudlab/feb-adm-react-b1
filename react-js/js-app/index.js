let indianDiv=document.querySelector("#india");
let dubaiDiv=document.querySelector("#dubai");
let americaDiv=document.querySelector("#america");


function jsClock(props){

    let time = new Date().toLocaleTimeString("en-US",{timeZone:props});

    let ui=`
    <div class='card'>
      <div class='card-header bg-info'><h3>${props}</h3></div>
        <div class='card-body'>
            <h3>${time}</h3
        </div>
    <div>
    `
    return ui;
}

function reactClock(props){
    let time = new Date().toLocaleTimeString("en-US",{timeZone:props});
    return <div className='card'>
                <div className='card-header bg-warning'><h3>{props}</h3></div>
             <div className='card-body'>
                 <h3>{time}</h3>
             </div>
             </div>
            
    
 
}

const indianDivv1 = document.querySelector('#indiav1');
const dubaiDivv1 = document.querySelector('#dubaiv1');
const americaDivv1 = document.querySelector('#americav1');
const root1 = ReactDOM.createRoot(indianDivv1);
const root2 = ReactDOM.createRoot(dubaiDivv1);
const root3 = ReactDOM.createRoot(americaDivv1);


setInterval(()=>{
    indianDiv.innerHTML=jsClock("asia/kolkata"); // direct adding element to
    dubaiDiv.innerHTML=jsClock("asia/dubai");
    america.innerHTML=jsClock("america/new_york");

    root1.render(reactClock("asia/kolkata"));
    root2.render(reactClock("asia/dubai"));
    root3.render(reactClock("america/new_york"));

},1000);


