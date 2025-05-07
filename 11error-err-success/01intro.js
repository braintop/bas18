//המטרה היא למצא את השגיאה   
//שימו לב שורה 9 תקרוס לפעמים 
//אין 
// catch 
function f(successCallback, errorCallback) {
    console.log("a")
    let arr = [1, 2, 3]
    setTimeout(() => {
        let random = Math.floor(Math.random() * 5) // 0- 10 
        if (random >= arr.length) {
            // throw ("error happend:" + random)
            errorCallback()
        }
        else {
            successCallback()
        }
        console.log("b:" + random) //  אם יהיה שגיאה לא נתפוס אותה בזמן 
    }, 1000);
    console.log("c")
    console.log("d")
}
console.log("d")
function visaSuccessCallback() {
    document.body.style.backgroundColor = "blue"
}
function visaErrorCallback() {
    document.body.style.backgroundColor = "red"
}

f(visaSuccessCallback, visaErrorCallback)
