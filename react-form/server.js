const express = require ("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
const DB ='mongodb+srv://madhur:Madhur@cluster0.92gx1q9.mongodb.net/testDB?retryWrites=true&w=majority'
// const DB ='mongodb+srv://madhur:Madhur@cluster0.92gx1q9.mongodb.net/testDB?appName=mongosh+1.5.0'
mongoose.connect(DB);

app.use("/",require("./routes/testRoute"));

app.listen(3001, function(){
    console.log("express is running on port 3001");
})