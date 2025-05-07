//לא ניתן לטפל בשגיאות אסינכרוניות ב  
// try and catch

try{
    console.log("a")
    let arr = [1,2,3]
    setTimeout(() => {
        let random = Math.floor(Math.random()*10) // 0- 10 
        if(random>=arr.length)
            throw("error happend:" + random)
        console.log("b:" + random) //  אם יהיה שגיאה לא נתפוס אותה בזמן 
    }, 3000);
    console.log("c")
}
catch(e){
    console.log(e)
}
console.log("d")

//01 - a 
//02 - c  after 10 seconds 
//03 - b 