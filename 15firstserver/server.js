let http = require("http")

let serverFunction = function (req, res) {
    console.log(req.url)
    if (req.url == "/") {
        res.write("hello world1");
        res.end()
    }
    else if (req.url === "/yair") {
        res.write("tfilin");
        res.end()
    }
    else if (req.url === "/asaf") {
        res.write("node");
        res.end()
    }
    else {
        res.write("jibrish");
        res.end()
    }
}
let httpServer = http.createServer(serverFunction)

httpServer.listen(3000)
console.log("server run on port 3000")


// מחשב שלי  = localhost = 127.0.0.1 

