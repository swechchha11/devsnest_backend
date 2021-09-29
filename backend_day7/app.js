const express = require("express");
const app = express();

const slash = (req, res) => {
      res.send("HELLO");
} ;
// app.get("/", slash);
// app.post("/", slash);
// app.put("/", slash);
// app.delete("/", slash);
// app.get("/", (req, res) => {
//     res.sendStatus(200);
//     res.send("HELLO");
// });

// app.get("/", (req, res) => {
    // res.sendStatus(400);
    // // res.json({ a: 1});
    // res.send();
//     res.status(200).send("hello");
// });
app.get('/products', (req,res) => {
    req.query = {
        limit: 50,
        q: "something"
    }
    res.send(req.query.q);
})

app.get('/ab?cd', (req,res) => {
    res.send('abcd');
})
app.listen(8000);