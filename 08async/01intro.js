console.log("a")
setTimeout(() => {
    console.log("b")
}, 10000);

console.log("c")

//01 - a 
//02 - c  after 10 seconds 
//03 - b 