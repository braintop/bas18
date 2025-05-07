/*
צרו פונקציה בשם getRandomNumberAfterDelay הממתינה ע"י 
setTimeout חמש שניות,
 ולאחר מכן מחזירה לקוד שקרא לה (ע"י callback)
  מספר רנדומלי בין 0 ל-100. 
  קיראו לה מלחצן והציגו את המספר המוחזר.

*/

function getRandomNumberAfterDelay(callback) {

    setTimeout(() => {
        let x = callback()
        console.log(x)
        alert(x);
    }, 5000);
}

function myRandom() {
    let r = Math.floor(Math.random() * 100)
    return r;
}
function start() {
    getRandomNumberAfterDelay(myRandom)
}