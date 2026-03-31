const mongoose = require('mongoose');

const schema = mongoose.Schema;

const todoSchema = new schema({
    userName : String,
    mobile : String,
});


const todo = mongoose.model("Todo",todoSchema);

module.exports = todo;