function sum(a, b) {
    return a + b
}
function min(a,b){
    return a-b; 
}
function mult(a,b){
    return a*b 
}
const sum1 = (a,b)=>{
    return a+b 
}
function compute(callback){
    let sol = callback(9, 7);
    console.log(sol)
}

function computev2(x,y, callback){
    let sol = callback(x, y);
    console.log(sol)
}


// compute(mult)
// compute(sum)
// compute(min)

// ()=> {}
compute( ()=>{} ) // פונקציה אנונימית
compute( ()=>{return 5} )// פונקציה אנונימית
compute( (x,y)=>{return 5*(x+y)} ) //  פונקציה אנונימית 


