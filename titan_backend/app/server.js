"use strict";
var port = process.env.port || 3000,
    url = require("url"),
    bodyparser = require("body-parser"),
	express = require("express"),
    app = express(),
	trans = require('../transactionmanager/transactionmanager'),
	routes = require('../routes/transactions');

app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, Universe!!!!!! Wonderful to be here with you today, everyday!");
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
});


app.get("/transactions", (req, res) => {
    var transobj = JSON.stringify(trans.getTransactions());
    res.send(transobj); 
});


app.post("/transactions", (req, res)=>{
    trans.sendReqParam(req, res);
    res.sendStatus(200);
})

app.get("/products/:transaction_id", (req, res)=>{
    var transobj = JSON.stringify(trans.getTransactions());
    res.send(transobj); 
})

app.post("/products/:transaction_id", (req, res)=>{
    trans.deleteTrans(req, res);
    res.sendStatus(200);
})


app.get("/index.html", (req, res) => {
    var validresponsemsg = "<h1>Welcome, to Titan Community Bank</h1>";
    res.send(validresponsemsg + "200 ok"); 
});

app.listen(port);

console.log(`The Express.js server has started and is listening on port number:${port}`);

   