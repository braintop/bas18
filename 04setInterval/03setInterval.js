/*
 שפר את הפונקציה 
f 
כך שתציג מספר שעולה ב 1 
כל שניה 
*/

function f() {
    let counter = 0
    setInterval(() => {
        counter++
        document.getElementById("timer").innerText = counter;
        if (counter > 10) {
            document.getElementById("timer").style.color = "blue"
        }
        console.log(counter)
    }, 1000)
}

f()