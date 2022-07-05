const express = require("express");
const router = express.Router();
const Test = require("../models/testModel");

router.route("/create").post((req,res)=>{
    const name = req.body.name;
    const email= req.body.email;
    const phone=req.body.phone;
    const date= req.body.date;

    const newTest = new Test({
        name,
        email,
        phone,
        date
    });

    newTest.save();
})

module.exports=router;