"use strict";
var port = process.env.port || 3000,
    url = require("url"),
    bodyparser = require("body-parser"),
	express = require("express"),
    app = express(),
	//trans = require('../transactionmanager/transactionmanager'),
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
    
   function getTransactions() {
       class Transaction {
	constructor (ID, date, description, category, type ,amount) {
		this.ID = ID;
		this.date = date;
		this.description = description;
		this.category = category; 
		this.type = type; 
		this.amount  = amount;
	}
}

var allTransactions= [ 
	new Transaction(1,"Aug 07 2021", "Baseball", "sports", "debit", 20),
	new Transaction(2,"Sep 07 2021", "Baseball-mit", "sports", "debit", 40),
	new Transaction(3,"Oct 07 2021", "Baseball-bat", "sports", "debit", 30),
	new Transaction(4,"Oct 07 2021", "Whistle", "sports", "debit", 10),
	new Transaction(5,"Nov 07 2021", "Baseball-tee", "sports", "debit", 15),
];
       return allTransactions;
  };            
    //return getTransactions();
    console.log(getTransactions());
    //return allTransactions;
    //return transobj;
    res.send(getTransactions());
})

 
app.post("/transactions", (req, res)=>{
    
    //var newlist = ("transactions", newlist);
    function sendReqParam () {
    //newinctrans = (JSON.stringify(req.body)); 
    var body = req.body;
    
    var ID = body.ID,
        date = body.date,
        description = body.description,
        category = body.category,
        type = body.type,
        amount = body.amount;
    ID = allTransactions.length + 1;
    allTransactions.push(new Transaction(ID, date, description, category, type ,amount));
};
   // sendReqParam(req, res);
    res.sendStatus(200);
    res.send(sendReqParam());
})

app.get("/products/:transaction_id", (req, res)=>{
    var transobj = JSON.stringify(trans.getTransactions());
    res.send(transobj); 
})

app.post("/products/:transaction_id", (req, res)=>{
    function deleteTrans () {
    var body = req.body;
    console.log(body);
    var ID = body.ID - 1;
    delete allTransactions[ID];
};
    deleteTrans(req, res);
    res.sendStatus(200);
})


app.get("/index.html", (req, res) => {
    var validresponsemsg = "<h1>Welcome, to Titan Community Bank</h1>";
    res.send(validresponsemsg + "200 ok"); 
});

app.listen(port);

console.log(`The Express.js server has started and is listening on port number:${port}`);







   