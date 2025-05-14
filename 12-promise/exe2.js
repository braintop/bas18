function generatePrimeNumberAfterDelayAsync(min, max) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = min + Math.floor(Math.random() * (max - min))// min<number<max
            let answer = true;
            for (let i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    answer = false;
                }
            }
            if (answer == true) {
                resolve("success : " + number + " is prime")
            }
            else {
                reject("error : " + number + " is not prime")
            }
        }, 3000);
    })
    return p;
}
generatePrimeNumberAfterDelayAsync(10, 16)
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
console.log("המשכתי בקוד")
// let solution = generatePrimeNumberAfterDelayAsync(10, 16);
// solution
//     .then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) })