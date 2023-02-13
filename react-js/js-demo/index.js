// functions and operators

// 2 types
/*
f1();
function f1(){
    console.log("Hello f1 function....");
}

let f2=function(){
    console.log("Hello f2 function");
}

f2();
*/


function f1(){
    return 100+200;
}

let sum=f1();

// retirn more than one value

function f2(){
    let s1="I am data of s1..";
    let s2="I am data of s2...";
    //return {"s1":s1, "s2":s2};
    return {s1,s2}
}

let funObj=f2();

// advanced functions

/*
function teach(sub){
    console.log("... teaching "+sub);
    function learn(){
        console.log("... learning");
    }

    return learn;
}

let s1=teach('java'); // no
s1();
s1();
s1();


*/

/*
let teach=(sub)=>{
    console.log('teaching '+sub);
    let learn=()=>console.log("..learning");
    //learn();
    return learn;
}

let l1=teach('java');
l1();
l1();
l1();

*/

let validateForm=()=>{
    console.log('validating form')
    let nameValidator=()=>console.log("validating persons name");
    let emailValidator=()=>console.log("validating Email ID");
    let phoneValidator=()=>console.log("validating Phone number");
    let postCodeValidator=()=>console.log("validating Post Code");
    return{nameValidator, emailValidator, phoneValidator,postCodeValidator}
}

let validateObj=validateForm();






















