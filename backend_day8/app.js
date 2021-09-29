const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const checkadmin = (req,res,next) => {
    if(req.query.admin === 'true'){
        next()
    }else{
        res.status(400).send("shouldbeadmin")
    }
};
// app.use(checkadmin);
app.use(bodyParser.urlencoded{{extended:true}});
app.use(bodyParser.json());
const sendres = (req,res) => {
    res.status(200)
    res.json(req.query)
};
app.get('/', checkadmin, sendres);


app.get('/', (req,res) => {
res.status(200)
res.json(res.query)
});


app.get('/', (req,res,next) => {
    console.log("in first");
    if(req.query.admin === 'true'){
        next()
    }
    else{
        res.status(400).send("{should be admin");
    }
    next();
},(req,res) => {

    res.status(200)
    res.json(res.query)
});

app.post('/', (req,res) => {
    console.log('req.body ->', req.body);
    res.json({text: req.body})
})

app.get('/', (req,res) => {
    res.send("HELLO");
})
app.listen(8000);