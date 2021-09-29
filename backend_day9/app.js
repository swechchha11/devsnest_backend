const express = require("express");
const app = express();
const path= require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// console.log(__dirname);
app.use('/', (req,res) => {
    //  res.sendFile(path.join(__dirname,"public/lotus.jpg"))
    //  res.download(path.join(__dirname, "public/test.json" ), "hello.json")
    // res.download(path.join(__dirname, "public/lotus.jpg" ), "us.jpg")
    res.render('index', {title: "express"})
    // res
    // .status(201)
    // .cookie("toke", "test", {
    //     expire: new Date(Date.now() + 8*3600000)
    // })
    // .cookie("hello", "hello")
    // .redirect(301, "/admin")
    
})
app.get('/', (req,res) => {
    res.send("HELLO");})
app.listen(8000);