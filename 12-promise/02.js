//const f = () => { }

// פרומיס זה פונקציה המקבלת כפרמטר פונקציה והפונקציה מקבלת 2 פונקציות 
function getData(url) {
    let p = new Promise((resolve, reject) => {
        let arr = [1, 2, 3]
        setTimeout(() => {
            let random = Math.floor(Math.random() * 5) // 0- 10 
            if (random < arr.length) {
                // throw ("error happend:" + random)
                resolve("success from :" + url) // send to catch 
            }
            else {
                reject("error data from : " + url);// send to then 
            }
            console.log("b:" + random) //  אם יהיה שגיאה לא נתפוס אותה בזמן 
        }, 1000);
    })
    return p;
}
let solution = getData("https://abc.com")

solution
    .then((s) => { console.log(s) })
    .catch((e) => { console.log(e) })
