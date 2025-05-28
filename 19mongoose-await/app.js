var CurrentProduct = require('./ProductModel');
const mongoose = require('mongoose');
var express = require('express');
const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

var app = express();
app.use(express.json())
app.post('/api/v1/products', async function (req, res) {

    try {
        let p1 = req.body;
        console.log(req.body)
        var newItem = new CurrentProduct(p1);
        let item = await newItem.save()
        res.json({ item: item })
    }
    catch (err) {
        res.json({ error: item })
    }

    // newItem.save().then(item => {
    //     res.json({ item: item })
    // }).catch(err => {
    //     console.log("error 😱:" + err)
    //     res.json({ error: item })

    // });
});
app.get("/api/v1/products", async (req, res) => {
    let items = await CurrentProduct.find()
    res.json(items)
})
app.get("/api/v1/products/:id", async (req, res) => {
    try {
        let id = req.params.id
        let item = await CurrentProduct.findOne({ _id: id })
        res.json(item)

    }
    catch (err) {
        res.json({ "error": "user not found" })
    }
})
app.delete("/api/v1/products/:id", async (req, res) => {
    try {
        let id = req.params.id
        let item = await CurrentProduct.deleteOne({ _id: id })
        res.json(item)

    }
    catch (err) {
        res.json({ "error": "user not found - not deleted...." })
    }
})







try {
    mongoose.connect(uri, clientOptions);

}
catch (err) {
    console.log(err)
}
app.listen(3000)



async function run() {
    //b123b123
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.log(err)
    }
    finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
//run()
