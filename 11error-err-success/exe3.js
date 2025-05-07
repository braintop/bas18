/*
הציגו על הדף את המילה Start
 ואז כעבור 3 שניות מספר רנדומלי בין 0 ל-
 100, ואז כעבור 5 שניות מספר רנדומלי בין 0 ל-
 100, ואז כעבור 7 שניות מספר רנדומלי בין
 0 ל-100 ואז End.
כלומר, רק הצגת המספרים הרנדומליים מתבצע באופן אסינכרוני, כל אחד ע"י setTimeout משלו.
לכן מה שאמורים לראות בסיום ההדפסות יהיה:
Start
End
(מספר רנדומלי בין 0 ל-100)
(מספר רנדומלי בין 0 ל-100)
(מספר רנדומלי בין 0 ל-100

*/

function myRandom(){
    console.log(Math.floor(Math.random()*100))
}
 console.log("start")
setTimeout(myRandom,3000)
setTimeout(myRandom,5000)
setTimeout(myRandom,7000)
console.log("end")