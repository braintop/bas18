var mongoose = require("mongoose");
var PersonSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, 'A person must have firstname'],
        unique: true,
        trim: true
    },
    lastname: {
        type: String,
        minlength: [5, 'Description is minimum 5 characters'],
        maxlength: [50, 'lastname is maximum 50 characters']
    },
    city: {
        type: String,
        required: [true, 'A person must have city'],
        minlength: [5, 'city is minimum 5 characters'],
        maxlength: [20, 'city is maximum 20 characters'],
    },
    salary: {
        type: Number,
        required: [true, 'A product must have price'],
        min: [0, 'salary must be above 0'],
        max: [100000, 'salary must be below 100000']
    },

});
module.exports = mongoose.model('persons', PersonSchema);