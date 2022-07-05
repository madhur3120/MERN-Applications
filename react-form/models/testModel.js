const mongoose = require("mongoose");

const testSchema ={
    name: String,
    email: String,
    phone: String,
    date: Date
}

const Test = mongoose.model("Test",testSchema);

module.exports=Test;