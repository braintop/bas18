function generatePrimeNumberAfterDelayAsync(min, max) {
    let p = new Promise((resolve, reject) => {
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
    })
    return p;
}
generatePrimeNumberAfterDelayAsync(10, 16)
    .then((data) => { console.log(data) })
    .catch( (err) => { console.log(err)  })

// let solution = generatePrimeNumberAfterDelayAsync(10, 16);
// solution
//     .then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) })