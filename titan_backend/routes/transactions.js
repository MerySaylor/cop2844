// GET /transactions 
var trans = require("../TransactionManager/transactionmanager");
    
   exports.transstring = (req, res) => {
              
       var transobj = JSON.stringify(trans.getTransactions());
		res.send(transobj);
       
   };
exports.transstring = (req, res) => {
res.render("../routes/transactions");
};

// POST /transactions/ 
    
 /*   The HTTP Request body contains the JSON with the data to representing a new transaction. A transaction should contains
    
    the following data:
    
        - Date
        - Description
        - Amount
        - Type {credit or debit}   */ 


   // app.get("/index.html", (req,res) = ()=> {
  /*      var validresponsemsg = "<h1>Welcome, to Titan Community Bank</h1>";
		res.send(validresponsemsg + "200 ok");
		});
i
	else if (req.url == "/transactions.html") {
        
        }
         
	else if (req.url !== '/index.html'  || '/transactions.html') { 
        var invalidresponsemsg = "<h1>Sorry, the page you are looking for is not here.</h1>";
		res.send(invalidresponsemsg + "404 page not found"); 
		}
}

exports.transidx = (req, res) => {
res.render("../routes/transactions");
};
exports.showSignUp = (req, res) => {
res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
res.render("thanks");
};*/