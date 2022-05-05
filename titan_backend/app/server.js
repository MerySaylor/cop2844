"use strict";
var port = process.env.port || 3000,
    url = require("url"),
    bodyparser = require("body-parser"),
	express = require("express"),
    app = express();
	//trans = require('../transactionmanager/transactionmanager'),
	//routes = require('../routes/transactions');

app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, Universe!!!!!! Wonderful to be here with you today, everyday!");
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
});


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

var listofTransactions= [ 
	new Transaction(1,"Aug 07 2021", "Baseball", "sports", "debit", 20),
	new Transaction(2,"Sep 07 2021", "Baseball-mit", "sports", "debit", 40),
	new Transaction(3,"Oct 07 2021", "Baseball-bat", "sports", "debit", 30),
	new Transaction(4,"Oct 07 2021", "Whistle", "sports", "debit", 10),
	new Transaction(5,"Nov 07 2021", "Baseball-tee", "sports", "debit", 15)
];
  
function getTransactions(){
   console.log(listofTransactions);
    return listofTransactions;
}
app.get("/transactions", (req, res) => {    
   res.send(getTransactions());
})
     
    app.post("/transactions", (req, res)=>{
    //function sendReqParam () {
    var lengthoftrans = listofTransactions.length,
        body = req.body;    
    var ID = lengthoftrans + 1,
        date = body.date,
        description = body.description,
        category = body.category,
        type = body.type,
        amount = body.amount;
        
    //var newlistoftrans = [];
    listofTransactions.push(new Transaction(ID, date, description, category, type ,amount));
        
    res.sendStatus(200);
});


app.get("/products/:transaction_id", (req, res)=>{
    var transobj = JSON.stringify(getTransactions());
    res.send(transobj); 
})

app.post("/products/:transaction_id", (req, res)=>{
    
    //function deleteTrans () {
    var body = req.body;
    console.log(body);
    var ID = body.ID - 1;
    delete listofTransactions[ID];
    
    res.sendStatus(200);

   // deleteTrans(req, res);
});


app.get("/index.html", (req, res) => {
    var validresponsemsg = "<h1>Welcome, to Titan Community Bank</h1>";
    res.send(validresponsemsg + "200 ok"); 
});

app.listen(port);

console.log(`The Express.js server has started and is listening on port number:${port}`);







   