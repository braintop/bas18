function f(x,y){
    let s = x + y 
    return s; 
}
function g(x,y){
    let s = x - y 
    return s; 
}

const sum = (x,y)=>{
    let s = x + y 
    return s; 
}
const minus = (x,y)=>{
    let s = x - y 
    return s; 
}
const divide = (x,y)=>{
    let s = x / y 
    return s; 
}

let x = divide(8, 4); // x = 2 
function p(x){
    return x*x; 
}

let t =p(9); // t=81

let power1 = (x)=>{
    return x*x;
}

let power2 = (x)=>   x*x;
let power3 = x =>   x*x;
let y = power3(8);
//empty function 
let stam = ()=>{}
function test1(callback){
    callback()
}
test1(stam);

test1(()=>{})

// i love ice cream 
