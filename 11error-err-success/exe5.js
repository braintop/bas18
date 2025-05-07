/*
בגלישה לאתר – שנו את צבע 
הרקע של הדף לצבע רקע רנדומלי. בצעו זאת בכל שנייה 
כך שכל שנייה צבע הרקע של הדף ישתנה לצבע רקע רנדומלי.

*/
function f() {

    setInterval(() => {
        let arr = ["red", "green", "yellow"]
        let random = Math.floor(Math.random() * arr.length)
        console.log(arr[random])
        document.getElementById("id").style.backgroundColor = arr[random]

    }, 1000)
}
f()