/*
צרו תיבת טקסט ו-div. בטעינת הדף 
הציגו בכל שנייה בתוך ה-div מספר רנדומלי בין 0 
למספר שנמצא בתיבת הטקסט.
ביצוע פעולה כל שנייה יש לבצע ע"י setInterval.
האם אפשר תוך כדי פעילות האתר לשנות את
 המספר שנמצא בתיבת הטקסט כך שהשינוי אכן
 ישפיע על המספרים הרנדומליים המוצגים?
*/

function f(){
    let counter = 0 
    setInterval(()=>{
        counter+=1 
        console.log(counter)
    })
}
f()