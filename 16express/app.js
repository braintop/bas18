let express = require("express")
let app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.json({ message: "hello world get" })
})


app.post("/", (req, res) => {
    res.json({ message: "hello world post" })
})
app.post("/add", (req, res) => {
    console.log(req.body)
    res.json({ message: "add person to db" })
})
app.post("/person/:id", (req, res) => {
    console.log(req.params)

    console.log(req.params.id)
    res.json({ message: "hello world post" })
})

app.post("/person/:id/:city", (req, res) => {
    console.log(req.params)
    console.log(req.params.city)

    console.log(req.params.id)
    res.json(req.params)
})


app.listen(3000)


//get, post , delete , update(put , patch)
