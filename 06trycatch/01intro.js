
let arr = [1, 2, 3]
let random = Math.floor(Math.random() * 10)//0 - 2 
try {
    if (random >= arr.length) {
        throw ("out of bounds:" + random)
    }
    console.log(arr[random])// undefined 
}
catch (e) {
    console.log(e)
}
console.log("d")
