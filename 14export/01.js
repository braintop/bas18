exports.plus = function(a, b){
    return a+b
}
exports.minus  = function(a, b){
    return a-b
}
exports.fullname = function(firstname, lastname){
    return "hello" + firstname + " " + lastname;
}
exports.message = function(senderName, message, subject){
    return senderName + ":" +message + ":" + subject;
}



function mult(a, b){
    return a-b; 
}