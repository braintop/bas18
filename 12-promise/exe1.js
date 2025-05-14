function generate7BoomAfterDelayAsync(min, max) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = min + Math.floor(Math.random() * (max - min))// min<number<max
            if (number % 7 == 0 || number % 10 == 7) {
                resolve("boom:" + number)
            }
            else {
                reject("error:" + number)
            }
        }, 1000);
    })
    return p;
}
let solution = generate7BoomAfterDelayAsync(10, 100);// רץ ברקע
solution
.then((data)=>{console.log(data)} )
.catch((err)=>console.log(err))


console.log("continue");

//continue 