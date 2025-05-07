//המטרה היא למצא את השגיאה   
//שימו לב שורה 9 תקרוס לפעמים 
//אין 
// catch 
function f(callback) {
    console.log("a")
    let arr = [1, 2, 3]
    setTimeout(() => {
        let random = Math.floor(Math.random() * 10) // 0- 10 
        if (random >= arr.length) {
           // throw ("error happend:" + random)
           callback()
        }
        console.log("b:" + random) //  אם יהיה שגיאה לא נתפוס אותה בזמן 
    }, 3000);
    console.log("c")
    console.log("d")
}
console.log("d")
function fireman(){
    console.log("fire")
    document.body.style.backgroundColor="red"
}
function student(){
    console.log("40")
    document.body.style.backgroundColor="orange"
}
f(student)
//f(fireman)

//01 - a 
//02 - c  after 10 seconds 
//03 - b 